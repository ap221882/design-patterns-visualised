const PDFCreator = require("pdfkit");
const fs = require("node:fs");

class Resume {
  constructor(
    firstName,
    lastName,
    address,
    email,
    phone,
    education,
    skills,
    experience,
    interests
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.education = [];
    this.skills = [];
    this.experience = [];
    this.interests = [];
  }

  addFirstname(firstName) {
    this.firstName = firstName;
    return this;
  }

  addLastname(lastName) {
    this.lastName = lastName;
    return this;
  }

  addAddress(address) {
    this.address = address;
    return this;
  }

  addEmail(email) {
    this.email = email;
    return this;
  }

  addPhone(phone) {
    this.phone = phone;
    return this;
  }

  addEducation(education) {
    this.education.push(education);
    return this;
  }

  addSkills(skills) {
    this.skills.push(skills);
    return this;
  }

  addExperience(experience) {
    this.experience.push(experience);
    return this;
  }

  addInterests(interests) {
    this.interests.push(interests);
    return this;
  }

  build() {
    const pdf = new PDFCreator();
    pdf.pipe(fs.createWriteStream("sample.pdf"));

    const margin = pdf.page.margins.left;

    pdf.fontSize(25);
    pdf.text(this.firstName + " " + this.lastName);
    pdf.fontSize(10);
    const emailPhone = this.email + "/" + this.phone;
    pdf.text(
      emailPhone,
      pdf.page.width - margin - pdf.widthOfString(emailPhone) - 1,
      pdf.x
    );
    pdf.underline(margin, 20, pdf.page.width, pdf.y);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Address", pdf.page.margins.left);
    pdf.fontSize(15);
    pdf.text(this.address);

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Work Experience", pdf.page.margins.left);
    pdf.fontSize(15);
    this.experience.forEach((exp) => pdf.text(exp));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Education", pdf.page.margins.left);
    pdf.fontSize(15);
    this.education.forEach((edu) => pdf.text(edu));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Skill");
    pdf.fontSize(15);
    this.skills.forEach((skill) => pdf.text(skill));

    pdf.fontSize(25);
    pdf.text(" ");
    pdf.text("Interests");
    pdf.fontSize(15);
    this.interests.forEach((int) => pdf.text(int));

    pdf.end();
  }
}

const brendan = new Resume();
brendan
  .addFirstname("Brendan")
  .addLastname("Eich")
  .addAddress("CA, US")
  .addEmail("brendan@eich.com")
  .addPhone("1-800-BRENDAN")
  .addInterests("Music")
  .addInterests("Coding")
  .addExperience("Netscape")
  .addExperience("Mozilla")
  .addExperience("Brave")
  .addSkills("JS")
  .addEducation("SCU")
  .addEducation("SCLA")
  .build();
