"use client";

import { useState } from "react";
import { sendEmail } from "@/app/(landing)/actions";
import { FONTS } from "@/constants";
import { Heading, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { repeat, createToast } from "@/utils";
import { LandingButton } from "@/views/landing/components";
import { TextArea, Input } from "@/components";
import { ContactFormValues } from "@/views/landing/contact/contact-form/types";
import { CONTACT_FORM_VALIDATION_SCHEMA } from "@/views/landing/contact/contact-form/constants";
import styles from "@/views/landing/contact/contact-form/index.module.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
    },
    resolver: yupResolver(CONTACT_FORM_VALIDATION_SCHEMA),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await sendEmail(data);
      createToast({
        title: response?.message,
        type: response?.success ? "success" : "error",
      });
      if (response?.success) {
        reset();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        createToast({
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
      className={styles.pulsed}
    >
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Heading as={"h4"} fontFamily={FONTS.title} marginBottom={5}>
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
