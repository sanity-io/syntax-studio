import React from 'react'
import styles from './ImgLogo.css'
// While we recommend SVGs, an alternative is to use a regular image (png, jpg)
// Notice how we're "importing" the path from a local image - when building the
// studio, this image will automatically be part of the output bundle, with a
// hash that will make it easy to invalidate on changes.
import syntaxfmLogo from './logo.png'

const ImgLogo = () => <img className={styles.logo} src={syntaxfmLogo} />

export default ImgLogo
