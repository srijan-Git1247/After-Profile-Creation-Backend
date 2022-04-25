module.exports = {
  lifecycles: {
    //executed after i create a blood camps

    async afterCreate(result) {
      const users = await strapi.query("user", "users-permissions").find();

      let time = result.Time.toString();
      time = time.substring(0, 5);
      const res = result;

      //const data = await strapi.query('users').find();
      //console.log(data);
      const emails = users.map((a) => a.email);
      console.log(emails);

      try {
        for (let i = 0; i < emails.length; i++) {
          await strapi.plugins["email"].services.email.send({
            to: emails[i],
            from: "srijan_201800150@smit.smu.edu.in",
            subject: "A Blood Donation Camp Nearby ",
            text: `There is an Upcoming blood donation camp titled"${res.Name}" at ${res.Address} time=${time}. PLease check out the website for more info`,
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
