import 'dotenv/config';

// util email send
export const email = {
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL as unknown as number,
    secure: process.env.SECURE_EMAIL as unknown as boolean,
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.PASS_EMAIL,
      },
}

// util auth
export const auth = {
  secret: `${process.env.SECRET_AUTH}`,
}
