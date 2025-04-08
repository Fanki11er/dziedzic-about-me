"use server";
import sgMail, { ResponseError } from "@sendgrid/mail";
export const sendEmail = async (
  name: string,
  message: string,
  email: string = "No Email"
) => {
  const msg = {
    to: process.env.SENDGRID_TO || "",
    from: process.env.SENDGRID_FROM || "",
    subject: `Contact message form ${name}`,
    text: `Email: ${email} Message: ${message}
       `,
  };

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  try {
    await sgMail.send(msg);
    return "SUCCESS";
  } catch (err) {
    const error = err as ResponseError;
    console.log(`Code: ${error.code} Message: ${error.message}`);
    return "ERROR";
  }
};
