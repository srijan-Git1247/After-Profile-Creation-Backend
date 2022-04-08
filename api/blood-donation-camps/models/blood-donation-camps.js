module.exports = {
  lifecycles: {
    //executed after i create a blood camps
    async afterCreate(result) {
      let time = result.Time.toString();
      time = time.substring(0, 5);
      const res = result;
      const emails = [
        
        "srijan_201800150@smit.smu.edu.in",
        ,"shovit_201800146@smit.smu.edu.in",
      ];
      try {
        await strapi.plugins["email"].services.email.send({
          to: emails,
          from: "srijan_201800150@smit.smu.edu.in",
          subject: "A Blood Donation Camp Nearby ",
          text: `There is an Upcoming blood donation camp titled"${res.Name}" at ${res.Address} time=${time}. PLease check out the website for more info`,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
