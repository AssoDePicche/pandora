"use client"

import { useState, FormEvent } from "react";

import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Alert from "@/components/alert";
import Button from "@/components/button";
import TextField from "@/components/text-field";

export default function Login() {
  const [alertText, setAlertText] = useState(null);

  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      const headers = new Headers();

      headers.set("Accept", "application/json");

      headers.set("Accept-Language", "en-US");

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          email: data.get("email"),
          password: data.get("password"),
        })
      }).then((response) => response.json());

      if (200 !== response.status) {
        setAlertText(response.error);

        return;
      }

      localStorage.setItem("token", response.payload.token);

      router.push("/home");
    } catch (error) {
      setAlertText(error.message);
    }
  }

  return (
    <Form className="flex flex-col gap-y-4" onSubmit={submit}>
      <h1 className="font-black text-4xl">Login</h1>

      <TextField type="email" name="email" maxlength={255} placeholder="Email" />

      <TextField type="password" name="password" minlength={8} placeholder="Password" />

      <Button type="submit">Login</Button>

      <p>
        Already have an account? <Link href="/signup" className="underline">Sign Up</Link>
      </p>

      <Alert>{alertText}</Alert>
    </Form>
  );
}
