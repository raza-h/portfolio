'use client';
import React, { FC } from 'react'
import { Typewriter as RSTypewriter, TypewriterProps } from 'react-simple-typewriter'

const Typewriter: FC<TypewriterProps> = (props) => {
  return (
    <RSTypewriter {...props} cursorBlinking cursor cursorStyle={'_'} />
  )
}

export default Typewriter;