export const headerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      x: {
        // ease: 'easeIn',
        duration: 0.5,
        delay: 0.2,
      },
      opacity: {
        duration: 0.2,
        delay: 0.2,
      },
      type: 'spring',
    },
  },
  hidden: { opacity: 0, x: -120 },
}

export const tag1variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1,
        delay: 1.2,
      },
      opacity: {
        duration: 1,
        delay: 1.2,
      },
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: 40 },
}

export const tag2variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1,
        delay: 2.5,
      },
      opacity: {
        duration: 1,
        delay: 2.5,
      },
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: 40 },
}

export const rebelVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1,
        delay: 3.8,
      },
      opacity: {
        duration: 1,
        delay: 3.8,
      },
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: 0 },
}

export const socialVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1,
        delay: 4.9,
      },
      opacity: {
        duration: 1,
        delay: 4.9,
      },
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: 0 },
}

export const arrowVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        ease: 'easeOut',
        duration: 1,
        delay: 5.2,
      },
      opacity: {
        duration: 1,
        delay: 5.2,
      },
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: -80 },
}
