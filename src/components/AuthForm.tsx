"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MoonLoader } from "react-spinners";
import Link from "next/link";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email(),
    fullName: formType === "sign-up" ? z.string().min(2).max(50) : z.string().optional()
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", email: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex max-h-[800px] w-full max-w-[580px] flex-col justify-center space-y-6 transition-all lg:h-full lg:space-y-8"
        >
          <h1 className="text-center text-2xl font-bold text-light-100 md:text-left">
            {type === "sign-in" ? "Acesse sua conta" : "Criar conta"}
          </h1>
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1">
                    <FormLabel className="text-light-100 pt-2 text-[14px] leading-[20px] font-normal w-full">
                      Nome completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome completo"
                        {...field}
                        className="border-none shadow-none p-0 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-light-200 text-[14px] leading-[20px] font-normal"
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="text-red-500 text-[14px] leading-[20px] font-normal ml-4" />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 px-4 shadow-drop-1">
                  <FormLabel className="text-light-100 pt-2 text-[14px] leading-[20px] font-normal w-full">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu e-mail"
                      {...field}
                      className="border-none shadow-none p-0 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-light-200 text-[14px] leading-[20px] font-normal"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-red-500 text-[14px] leading-[20px] font-normal ml-4" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="h-[66px] bg-green-500 hover:bg-green-700 transition-all rounded-full text-[14px] leading-[20px] font-medium"
          >
            {type === "sign-in" ? "Acessar" : "Criar"}
            {isLoading && <MoonLoader size={20} />}
          </Button>

          {errorMessage && (
            <p className=" mx-auto w-fit rounded-xl bg-error/5 px-8 py-4 text-center text-error">
              *{errorMessage}
            </p>
          )}

          <div className="flex text-[14px] leading-[20px] font-normal text-center lg:text-left">
            <p className="text-light-100">
              {type === "sign-in"
                ? "Não tem uma conta ?"
                : "Já tem uma conta ?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="ml-1 font-medium text-blue-500"
            >
              {type === "sign-in" ? "Criar" : "Acessar"}
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AuthForm;
