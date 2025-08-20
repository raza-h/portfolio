"use client";

import { sendEmail } from "@/app/(landing)/actions";
import { toaster } from "@/components/common/toaster/Toaster";
import fonts from "@/constants/fonts";
import { Heading, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import "./index.css";
import { repeat } from "@/utils";
import { LandingButton } from "../landing-button";
import { Input } from "@/components/common/input";
import { TextArea } from "@/components/common/text-area";

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
    reset,
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
      w={[...repeat(3, "100%"), "70%", "50%"]}
      rounded={"md"}
      bg={"brand.card"}
      padding={5}
      className="pulsed"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Heading as={"h4"} fontFamily={fonts.title} marginBottom={5}>
          Send a message
        </Heading>
        <VStack>
          <Input
            {...register("name")}
            placeholder="John Doe"
            label={"Name"}
            errorMsg={errors?.name?.message}
          />
          <Input
            {...register("email")}
            placeholder="john@example.com"
            label={"Email"}
            errorMsg={errors?.email?.message}
            type={"email"}
          />
          <Input
            {...register("subject")}
            placeholder="Enter Subject"
            label={"Subject"}
            errorMsg={errors?.subject?.message}
          />
          <TextArea
            {...register("message")}
            placeholder="Enter Message"
            label={"Message"}
            errorMsg={errors?.subject?.message}
            rows={5}
          />
          <LandingButton type="submit" w={"100%"} loading={loading}>
            Submit
          </LandingButton>
        </VStack>
      </form>
    </VStack>
  );
};

export default ContactForm;
