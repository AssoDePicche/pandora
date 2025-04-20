"use client"

import { useState } from "react";

import Form from "next/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Alert from "@/components/alert";
import Button from "@/components/button";
import TextField from "@/components/text-field";

export default function Signup() {
  const [alertText, setAlertText] = useState(null);

  const router = useRouter();

  async function submit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);

      const headers = new Headers();

      headers.set("Accept", "application/json");

      headers.set("Accept-Language", "en-US");

      let response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          username: data.get("username"),
          email: data.get("email"),
          password: data.get("password"),
        })
      }).then((response) => response.json());

      if (201 !== response.status) {
        setAlertText(response.error);

        return;
      }

      response = await fetch("http://localhost:3000/login", {
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
      <h1 className="font-black text-4xl">Sign Up</h1>

      <TextField type="text" name="username" placeholder="Username" />

      <TextField type="email" name="email" placeholder="Email" />

      <TextField type="Password" name="password" placeholder="Password" />

      <Button type="submit">
        <span>Sign Up</span>
      </Button>

      <p>
        Already have an account? <Link href="/login" className="underline">Login</Link>
      </p>

      <Alert>{alertText}</Alert>
    </Form>
  );
}
