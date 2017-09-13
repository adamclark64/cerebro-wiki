import React from "react"
import styles from "./styles.css"

module.exports = ({term, previewText}) => (
	<div className={styles.main}>
		<div className={styles.articleTitleBar}><h1>{term}<span>Wikipedia article</span></h1></div>
		<p>{previewText}</p>
	</div>
)