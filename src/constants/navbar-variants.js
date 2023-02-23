export const navbarVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1,
        delay: 5.5,
      },
      opacity: {
        duration: 1,
        delay: 5.5,
      },
    },
  },
  hidden: { opacity: 0, y: 0 },
}
