export default defineAppConfig({
  alpine: {
    title: "seatedro's blog",
    description: "Inside the head of a curious programmer.",
    image: {
      src: "/og.png",
      alt: "shitposting ftw 🗿",
      width: 1200,
      height: 600
    },
    header: {
      position: "left", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "Rohit Prakash" // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: "https://www.github.com/seatedro/blog.git",
        text: "GitHub"
      },
      navigation: true, // possible value are : true | false
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Follow me on" // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "seatedro",
      instagram: "seatedro",
      github: "seatedro",
      Medium: {
        icon: "uil:medium-m",
        label: "Medium",
        href: "https://medium.com/@rohitp934"
      },
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rohitp934"
      }
    },
    form: {
      successMessage: "Message sent. Thank you!"
    }
  }
});
