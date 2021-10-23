import { Button } from "@/shared/components";
import { formatDate } from "@/shared/lib/index";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Button>app</Button>
			{formatDate(new Date())}
		</div>
	);
}
