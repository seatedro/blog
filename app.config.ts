export default defineAppConfig({
  alpine: {
    title: "Rohit's Blog",
    description: "Inside the head of a curious programmer.",
    // image: "/social-card-preview.png",
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300,
    },
    header: {
      position: "right", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "Rohit Prakash", // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: "https://www.github.com/rohitp934/blog.git",
        text: "GitHub"
      },
      navigation: true, // possible value are : true | false
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Follow me on", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "rohitp934",
      instagram: "_rohitp934",
      github: "rohitp934",
      Medium: {
        icon: "uil:medium-m",
        label: "Medium",
        href: "https://medium.com/@rohitp934"
      },
      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rohitp934",
      },
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
