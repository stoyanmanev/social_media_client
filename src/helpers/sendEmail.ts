import emailjs from "@emailjs/browser";
const { uuid } = require("uuidv4");

const sendEmail = (email: string) => {
  const generatedCode = uuid();
  const codeAvaiblleTime = 1000 * (60 * 2); // per 2 minutes

  return new Promise(async (resolve) => {
    const template: any = {
      user_email: email,
      user_code: generatedCode,
    };

    const isEmailSend = true;

    // const isEmailSend = await emailjs
    //   .send(
    //     "service_8hc2buq",
    //     "template_99uzixn",
    //     template,
    //     "user_Cr6Qp54sK2BTfTjQGArlk"
    //   )
    //   .then(
    //     function () {
    //       return true;
    //     },
    //     function (err) {
    //       return false;
    //     }
    //   );
    resolve({send: isEmailSend, code: generatedCode, avaiblleTime: codeAvaiblleTime});
  });
};
export default sendEmail;
