"use client"
import { cn } from "@/lib/utils"
import { Button, FormDescription, Input, Form, FormField, FormLabel, FormMessage, FormItem, FormControl } from "@/components/ui";
import { useLogin } from "@/hooks";
import { encrypt } from "@/lib"

import { useToast } from "@/components/ui"

import { useRouter } from 'next/navigation'
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"






const formSchema = z.object({
  account: z.string({
    required_error: "Account is required", invalid_type_error: "Name must be a string",
  }).trim().min(1, { message: "Account is required" }),
  password: z.string({
    required_error: "Password is required", invalid_type_error: "Password must be a string",
  }).trim().min(1, { message: "Password is required" }),
})


type FormType = z.infer<typeof formSchema>

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const onLoginSuccess = () => {
    toast({
      title: "登录成功",
      description: "欢迎回来",
    })
    router.replace('/')
  }

  const onLoginError = (error: Error) => {
    toast({
      title: "登录失败",
      description: error.message,
      variant: "destructive",
    })
    form.reset()
  }


  const { loading, onLogin } = useLogin({
    onSuccess: onLoginSuccess,
    onError: onLoginError
  })

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: '',
      password: ''
    },
  })

  function onSubmit(data: FormType) {
    const { account, password } = data
    const params = {
      account: encrypt(account), password: encrypt(password)
    }
    onLogin(params)
  }

  return (


    <Form {...form} {...props}>
      <form className={cn("grid gap-1 space-y-6", className)} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="account"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="emile or username"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={loading} />
              </FormControl>
              <FormDescription>
                This is your emile or username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="password"
                  type="password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  autoComplete="off"
                  disabled={loading} />
              </FormControl>
              <FormDescription>
                This is your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button loading={loading} type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  )
}
