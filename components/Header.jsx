import React from "react";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import watermark from "../public/watermark.png";

function Header({ signIn, signOut, session }) {

	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>{session?.user.name}</span>
					</h2>
					<p>welcome to the board.</p>
				</div>
				<div className={styles.profile}>
					{!session &&
						<button className={styles.sigininbtn} onClick={() => signIn()}>
							Sign In
						</button>
					}
					{session &&
						<div className={styles.image} onClick={() => signOut()}>
							<p className={styles.username}>{session?.user.name}</p>
							<img className={styles.imageindiv} src={session.user.image} alt="profile" />
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default Header;