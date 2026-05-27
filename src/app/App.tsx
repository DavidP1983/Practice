import { Repition } from '../repition/repition';
import { MainPage } from '../super-hero/main-page';
import './App.css';

// interface Response {
//   userId: number;
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   website: string;
// }

// type TStatusOptions = 'idle' | 'loading' | 'error'

export function App() {
  // const [data, setData] = useState<Response[]>([]);
  // const [status, setStatus] = useState<TStatusOptions>('idle');
  // const [value, setValue] = useState('');

  // useEffect(() => {
  //   getData(10)
  //     .then((res) => {
  //       if (res) {
  //         setData(res)
  //       }
  //     })
  //     .catch((e) => console.log(e))
  // }, []);

  // const getData = async (limit: number): Promise<Response[] | undefined> => {
  //   try {
  //     setStatus('loading')
  //     const SLUG = 'users';
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/${SLUG}?&_limit=${limit}`);
  //     if (!response.ok) {
  //       throw new Error('Error');
  //     }
  //     const data: Response[] = await response.json();
  //     return data;

  //   } catch (e) {
  //     if (e instanceof Error) {
  //       setStatus('error')
  //       console.log(e.message)
  //     }
  //   } finally {
  //     setStatus('idle')
  //   }
  // }

  // const filteredData = useMemo(() => {
  //   const newData = data.filter(({ username }) => username.toLowerCase().includes(value.toLowerCase()));
  //   return newData
  // }, [value, data])

  return (
    <>
      {/* <MyInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск..."
      />

      <div className='card'>
        <ul className='card-content'>
          {status === 'loading' ? <p style={{ display: "block", margin: '0 auto', fontSize: "24px", fontWeight: "bold" }}>Загрузка...</p> : null}
          {status === 'error' ? <p style={{ display: "block", margin: '0 auto', fontSize: "24px", fontWeight: "bold" }}>Error</p> : null}
          {filteredData.length
            ?
            filteredData?.map(({ id, name, email, username, website }) => (
              <li key={id} className='card-items'>
                <p>{username}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{website}</p>
              </li>
            ))
            :
            <span style={{ display: status !== 'loading' ? "block" : 'none' }}>Ничего не найдено...</span>
          }
        </ul>
      </div> */}

      {/* <ToggleComponent />
      <SearchComponent />
      <TreeDirectory />
      <Repition />
      <Main /> */}
      <Repition />
      <MainPage />
    </>
  );
}
