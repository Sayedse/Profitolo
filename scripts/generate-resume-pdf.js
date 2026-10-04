import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // Standard US Letter
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const darkNavy = rgb(0.04, 0.08, 0.16);
  const textDark = rgb(0.12, 0.15, 0.20);
  const textMuted = rgb(0.35, 0.40, 0.48);
  const tealAccent = rgb(0.0, 0.60, 0.68);
  const ruleColor = rgb(0.85, 0.88, 0.92);

  let y = height - 45;
  const margin = 45;
  const contentWidth = width - margin * 2;

  // Header
  page.drawText('SAYED SEPEHR MOZAFARI', {
    x: margin,
    y,
    size: 19,
    font: fontBold,
    color: darkNavy,
  });

  y -= 17;
  page.drawText('Software Developer & QA Automation', {
    x: margin,
    y,
    size: 11,
    font: fontBold,
    color: tealAccent,
  });

  y -= 15;
  const contactText = 'Email: supher.22@gmail.com   |   GitHub: github.com/Sayedse   |   LinkedIn: linkedin.com/in/sayed-sepehr';
  page.drawText(contactText, {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });

  y -= 10;
  // Header underline
  page.drawLine({
    start: { x: margin, y },
    end: { x: width - margin, y },
    thickness: 1,
    color: tealAccent,
  });

  y -= 18;

  function drawSectionHeading(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y,
      size: 9.5,
      font: fontBold,
      color: darkNavy,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.75,
      color: ruleColor,
    });
    y -= 13;
  }

  // PROFESSIONAL SUMMARY
  drawSectionHeading('Professional Summary');
  const summaryText =
    'Software Developer and QA Automation professional focused on building modern, reliable, and user-friendly digital experiences. Combines software development, web technologies, UI/UX principles, and automated testing to create products that are both functional and dependable.';
  
  // Word wrap summary
  const words = summaryText.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = line + (line ? ' ' : '') + word;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 9);
    if (testWidth > contentWidth) {
      page.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: textDark });
      y -= 13;
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: margin, y, size: 9, font: fontRegular, color: textDark });
    y -= 17;
  }

  // PROFESSIONAL EXPERIENCE
  drawSectionHeading('Professional Experience');

  const jobs = [
    {
      company: 'DoorDash',
      role: 'QA Automation Engineer',
      period: 'January 2026 – Present',
      bullets: [
        'Created automated test scripts using Java and Selenium WebDriver for regression and functional testing.',
        'Performed API testing using REST Assured and Postman.',
        'Validated backend data using SQL queries and JDBC connections.',
        'Used TestNG and Maven for test execution and framework management.',
        'Worked with Jenkins pipelines for automated test runs.',
        'Participated in Agile sprint meetings and defect tracking using JIRA.',
        'Maintained reusable test components using Page Object Model (POM).'
      ]
    },
    {
      company: 'CVS',
      role: 'QA Engineer',
      period: 'September 2025 – December 2025',
      bullets: [
        'Assisted in developing UI automation scripts using Selenium WebDriver and Java.',
        'Executed smoke, regression, and functional testing for web applications.',
        'Created and executed API test scenarios using Postman.',
        'Performed database validation using SQL queries.',
        'Used Git and GitHub for version control and collaboration.',
        'Supported test execution using TestNG and Maven.',
        'Worked with developers to identify and report software defects.'
      ]
    }
  ];

  for (const job of jobs) {
    page.drawText(job.company + ' — ' + job.role, {
      x: margin,
      y,
      size: 9.5,
      font: fontBold,
      color: darkNavy,
    });

    const periodWidth = fontRegular.widthOfTextAtSize(job.period, 8.5);
    page.drawText(job.period, {
      x: width - margin - periodWidth,
      y,
      size: 8.5,
      font: fontOblique,
      color: textMuted,
    });

    y -= 13;

    for (const bullet of job.bullets) {
      page.drawText('•', { x: margin + 6, y, size: 9, font: fontBold, color: tealAccent });
      page.drawText(bullet, {
        x: margin + 18,
        y,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      y -= 11.5;
    }
    y -= 6;
  }

  // TECHNICAL SKILLS
  drawSectionHeading('Technical Skills & Testing Toolchains');

  const skillGroups = [
    { label: 'Automation Testing:', skills: 'Selenium WebDriver, Playwright, TestNG, JUnit, Cucumber' },
    { label: 'API Testing:', skills: 'REST Assured, Postman' },
    { label: 'Database:', skills: 'SQL, PostgreSQL, MySQL, Oracle, SQL Developer' },
    { label: 'CI/CD & Version Control:', skills: 'Jenkins, Git, GitHub' },
    { label: 'Development & Frameworks:', skills: 'Java, Maven' },
    { label: 'Testing Practices:', skills: 'Agile/Scrum, BDD, Page Object Model (POM)' },
    { label: 'Tools:', skills: 'IntelliJ IDEA, JIRA' }
  ];

  for (const group of skillGroups) {
    page.drawText(group.label, {
      x: margin,
      y,
      size: 8.5,
      font: fontBold,
      color: darkNavy,
    });

    const labelWidth = fontBold.widthOfTextAtSize(group.label + ' ', 8.5);
    page.drawText(group.skills, {
      x: margin + labelWidth + 4,
      y,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });

    y -= 12;
  }

  y -= 6;

  // EDUCATION
  drawSectionHeading('Education');
  page.drawText('Associate Degree in Computer Science', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  y -= 12;
  page.drawText('Prince George’s Community College', {
    x: margin,
    y,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve('public/Sayed_Sepehr_Mozafari_Resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outputPath);
}

generateResume();
