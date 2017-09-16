import React from "react"
import styles from "./styles.css"

module.exports = ({term, previewText, thumbnail}) => (
	<div className={styles.main}>
		<div className={styles.articleTitleBar}><h1>{term}<span>From Wikipedia</span></h1></div>
		<img className={styles.articleThumb} src={thumbnail} />
		<p>{previewText}</p>
	</div>
)