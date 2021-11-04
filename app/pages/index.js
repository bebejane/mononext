import styles from '../styles/Home.module.css'
import Button from '@/shared/components/Button';

export default function Home({label, host}) {
  //console.log(data)
  return (
    <div className={styles.container}>
      <Button>{label}</Button>
      <a href="http://localhost:3001">http://localhost:3001</a>
    </div>
  )
}

export async function getServerSideProps(context){
  const host = context.req.headers.host
  const props = {
    label:'app',
    host
  }
  return {
    props
  }
}