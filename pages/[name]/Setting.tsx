import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  hello: String,
  name: String,
}

export default function Setting({ hello, name }: Props) {
  const router = useRouter()
  const toHomePage = async () => {
    await router.push('/','dummy-url')
  }

  return (
    <>
      <h1>[name]/setting.tsxがレンダリングされるよ！</h1>
      <p>{hello} {name}</p>
      <button onClick={toHomePage}>アクションによる画面遷移</button>
      <Link href='/'>
        ブラウザ更新しない
      </Link>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/">
        ブラウザ更新する
      </a>
    </>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      hello: 'こんにちは',
      name: context.query.name.toString(),
    }
  }
}