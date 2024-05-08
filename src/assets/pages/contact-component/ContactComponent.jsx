import React, { useState } from "react";
import { Card, Button, Textarea, Label, TextInput } from "flowbite-react";
import contact from "../../../../public/contact.jpg";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
function ContactComponent() {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_83x1uwe",
        "template_n8lsszc",
        {
          to_name: "Mohamed Shaukhan",
          to_email: "mohamedshaukhan19@gmail.com",
          from_name: data.name,
          from_email: data.email,
          phone_number: data.phone,
          subject: data.subject,
          message: data.message,
          reply_to: "Thank you for massage",
        },
        "8JcnqXfQ4WfL2FZ0t"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        reset();
        setShowToast(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <main className="flex justify-center " id="contact">
      <section className="container bg-green-100  dark:bg-black">
        <Card className="bg-green-50 dark:shadow-white shadow-slate-900">
          <p className=" tracking-[0.5em]  pb-6 gap-1 text-center">CONTACT</p>
          <div className="grid lg:grid-flow-col lg:grid-cols-2 justify-center gap-4">
            <div className="relative w-full h-full">
              <img
                src={contact}
                alt="Contact"
                className="w-full h-full lg:absolute object-cover rounded"
              />
            </div>
            <div className="">
              <Card className="bg-green-50 py-12 dark:shadow-white shadow-slate-900 relative">
                <h2 className="text-3xl md:text-4xl text-green-700 font-bold googlefont shadow-slate-600 text-center py-4 dark:text-green-400 hover:animate-bounce">
                  Contact With Me
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex justify-center flex-col gap-y-9 "
                >
                  {showToast && (
                    <div className="flex flex-col gap-4 absolute bottom-16 left-0 w-full  ">
                      <Toast className="start-0 end-0 absolute">
                        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                          <HiCheck className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">
                          send successfully.
                        </div>
                        <Toast.Toggle />
                      </Toast>
                    </div>
                  )}
                  <div className="grid gap-y-3">
                    <Label htmlFor="name" value="YOUR NAME" color="success" />
                    <TextInput
                      id="name"
                      type="text"
                      color="info"
                      placeholder="Enter your name"
                      required
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-red-500">
                        Please enter your name
                      </span>
                    )}
                  </div>
                  <div className="grid gap-y-3">
                    <Label
                      htmlFor="phone"
                      value="PHONE NUMBER"
                      color="success"
                    />
                    <TextInput
                      id="phone"
                      type="tel"
                      color="info"
                      placeholder="Enter your phone number"
                      required
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className="text-red-500">
                        Please enter a valid phone number
                      </span>
                    )}
                  </div>
                  <div className="grid gap-y-3">
                    <Label htmlFor="email" value="EMAIL" color="success" />
                    <TextInput
                      id="email"
                      type="email"
                      color="info"
                      placeholder="name@gmail.com"
                      required
                      {...register("email")}
                    />
                    {errors.email1 && (
                      <span className="text-red-500">
                        Please enter a valid email
                      </span>
                    )}
                  </div>
                  <div className="grid gap-y-3">
                    <Label htmlFor="subject" value="SUBJECT" color="success" />
                    <TextInput
                      id="subject"
                      type="text"
                      color="info"
                      placeholder="Enter your subject"
                      required
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <span className="text-red-500">
                        Please enter a subject
                      </span>
                    )}
                  </div>
                  <div className="grid gap-y-3">
                    <Label
                      htmlFor="message"
                      value="YOUR MESSAGE"
                      color="success"
                    />
                    <Textarea
                      color="info"
                      id="message"
                      placeholder="Leave a comment..."
                      required
                      rows={4}
                      {...register("message")}
                    />
                    {errors.message && (
                      <span className="text-red-500">
                        Please enter a message
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      gradientDuoTone="greenToBlue"
                      size="lg"
                      type="submit"
                      className="w-fit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default ContactComponent;
