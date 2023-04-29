import { apiKey } from "./../common/constant.js";
async function sendEmail(
  isAccept,
  email,
  firstName,
  lastName,
  role,
  username,
  password
) {
  try {
    const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "When I Work",
          email: "khaledagwa88@gmail.com",
        },
        to: [
          {
            email: email,
          },
        ],
        subject: "Confirmation Email",
        htmlContent: isAccept
          ? acceptMail(firstName, lastName, role, username, password)
          : rejectMail(firstName, lastName),
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function acceptMail(firstName, lastName, role, username, password) {
  return `<!DOCTYPE html>
                        <html>
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Account Activation</title>
                            </head>
                            <body style="background-color: #f6f6f6; font-family: Arial, sans-serif;">
                                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                                    <h1 style="color: #007bff; text-align: center;">Account Activation</h1>
                                    <p style="font-size: 16px;">Dear ${
                                      firstName + lastName
                                    }<small>${role}</small></p>
                                    <p style="font-size: 16px;">Thank you for signing up for our service.</p>
                                    <div style="text-align: center;">
                                        <h3 style="color:green;"> Your Login Data Is </h3>
                                        <p style="font-size: 16px;">Your User Name :  ${username}</p>
                                        <p style="font-size: 16px;">Your Password : ${password}</p>
                                    </div>
                                    <p style="font-size: 16px;">If you did not create an account, please disregard this email.</p>
                                    <p style="font-size: 16px;">Thank you,</p>
                                    <p style="font-size: 16px;">[When I Work]</p>
                                </div>
                            </body>
                        </html>`;
}

function rejectMail(firstName, lastName) {
  return `<!DOCTYPE html>
                    <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>Rejection Email</title>
                        </head>
                        <body>
                            <h1>Registration Failed</h1>
                            <p>Dear ${firstName + " " + lastName},</p>
                            <p>We're sorry to inform you that your registration for our website has failed due to incorrect information provided.</p>
                            <p>Please check the information you entered and try again. If you continue to have problems, please contact our support team for assistance.</p>
                            <p>Thank you for your interest in our website.</p>
                            <p>Sincerely,</p>
                            <p>The When I Work  Team</p>
                        </body>
                    </html>
                            `;
}
export { sendEmail };
