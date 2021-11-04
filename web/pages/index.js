import styles from '../styles/Home.module.css'
import Button from '../../shared/components/Button';

export default function Home({label, host}) {
  return (
    <div className={styles.container}>
      <Button>{label}</Button>
      <a href="http://localhost:3000">http://localhost:3000</a>
    </div>
  )
}

export async function getServerSideProps(context){
  const host = context.req.headers.host
  const props = {
    label:'web',
    host
  }
  return {
    props
  }
}