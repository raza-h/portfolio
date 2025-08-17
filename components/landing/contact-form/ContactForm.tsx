"use client";

import { sendEmail } from "@/app/(landing)/actions";
import { toaster } from "@/components/common/toaster/Toaster";
import fonts from "@/constants/fonts";
import {
  Button,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import './index.css';

interface IFormInput {
  name: string;
  subject: string;
  message: string;
  email: string;
}

const schema = yup
  .object({
    name: yup.string().trim().required().label("Name"),
    subject: yup.string().trim().required().label("Subject"),
    message: yup.string().trim().required().label("Message"),
    email: yup.string().email().required().label("Email"),
  })
  .required();

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      toaster.create({
        title: response?.message,
        type: response?.success ? "success" : "error",
      });
      if (response?.success) {
        reset();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toaster.create({
          title: err instanceof Error ? err.message : "Something went wrong",
          type: "error",
        });
      }
    }
    setLoading(false);
  };

  return (
    <VStack
      w={["100%", "100%", "100%", "70%", "50%"]}
      rounded={"md"}
      bg={"brand.card"}
      padding={5}
      className="pulsed"
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Heading as={"h4"} fontFamily={fonts.title} marginBottom={5}>
          Send a message
        </Heading>
        <VStack>
          <VStack align={"start"} width={"100%"}>
            <label htmlFor="name" style={{ fontFamily: fonts.title }}>
              Name
            </label>
            <Input
              {...register("name")}
              placeholder="John Doe"
              borderColor={"brand.light"}
              border={"1px solid"}
              _focus={{
                outlineColor: "brand.main",
                borderColor: "brand.main",
              }}
            />
            <Text color={"red.300"} as={"small"}>
              {errors?.name?.message}
            </Text>
          </VStack>
          <VStack align={"start"} width={"100%"}>
            <label htmlFor="email" style={{ fontFamily: fonts.title }}>
              Email
            </label>
            <Input
              {...register("email")}
              placeholder="john@example.com"
              type="email"
              borderColor={"brand.light"}
              border={"1px solid"}
              _focus={{
                outlineColor: "brand.main",
                borderColor: "brand.main",
              }}
            />
            <Text color={"red.300"} as={"small"}>
              {errors?.email?.message}
            </Text>
          </VStack>
          <VStack align={"start"} width={"100%"}>
            <label htmlFor="subject" style={{ fontFamily: fonts.title }}>
              Subject
            </label>

            <Input
              {...register("subject")}
              borderColor={"brand.light"}
              placeholder="Enter Subject"
              border={"1px solid"}
              _focus={{
                outlineColor: "brand.main",
                borderColor: "brand.main",
              }}
            />
            <Text color={"red.300"} as={"small"}>
              {errors?.subject?.message}
            </Text>
          </VStack>
          <VStack align={"start"} width={"100%"}>
            <label htmlFor="message" style={{ fontFamily: fonts.title }}>
              Message
            </label>
            <Textarea
              {...register("message")}
              borderColor={"brand.light"}
              placeholder="Enter Message"
              border={"1px solid"}
              _focus={{
                outlineColor: "brand.main",
                borderColor: "brand.main",
              }}
              rows={5}
              draggable={false}
              resize={"none"}
            />
            <Text color={"red.300"} as={"small"}>
              {errors?.message?.message ?? "\xa0"}
            </Text>
          </VStack>
          <Button
            type="submit"
            w={"100%"}
            bg={"brand.main"}
            color={"brand.bg"}
            border={"1.5px solid"}
            fontWeight={600}
            fontFamily={fonts.title}
            fontSize={14}
            borderColor={"transparent"}
            _hover={{
              bg: "brand.bg",
              borderColor: "brand.main",
              color: "brand.main",
            }}
            loading={loading}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

export default ContactForm;
