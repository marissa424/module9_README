// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
      case "APACHE 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GPL 3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
      case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    default:
      licenseLink = "";
      break;
  }
  
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";


if (license != "None") {
  licenseSect += "## License\n"
  licenseSect += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
}

return licenseSect;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];

  // add title
  let markdown = "# " + data.title + "\n";

  // add license badge
  markdown += renderLicenseBadge(data.license) + "\n";

  // add table of contents
  markdown += "## Table of Contents\n";
  for (let i=0; i<sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";

  // add description
  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";

  // add installation
  markdown += "## " + sections[1] + "\n";
  markdown += data.install + "\n";

  // add usage
  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";

  // add contributing
  markdown += "## " + sections[3] + "\n";
  markdown += data.contribution + "\n";

  // add testing
  markdown += "## " + sections[4] + "\n";
  markdown += data.test + "\n";

  // add license
  markdown += renderLicenseSection(data.license) + "\n";

  // add questions
  markdown += "## " + sections[6] + "\n";
  markdown += "You can find me [HERE](https://github.com/" + data.username + ") on Github\n";
  markdown += "You can email me at " + data.email + " if you have any additional questions.\n"

  return markdown;
}
module.exports = generateMarkdown;
