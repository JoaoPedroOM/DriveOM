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
import { MoonLoader } from 'react-spinners';

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type formType = "sign-in" | "sign-up";

const AuthForm = ({ type }: { type: formType }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
            {type === "sign-in" ? "Sign In" : "Sign Up"}
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
                  <FormMessage className="text-red text-[14px] leading-[20px] font-normal ml-4" />
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
                <FormMessage className="text-red text-[14px] leading-[20px] font-normal ml-4" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="h-[66px] bg-green-500 hover:bg-green-700 transition-all rounded-full text-[14px] leading-[20px] font-medium"
          >
            {type === "sign-in" ? "Sign In" : "Sign Up"}
            {isLoading && (
              <MoonLoader size={20} />
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AuthForm;
