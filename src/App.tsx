import { useState } from 'react';

import StyledButton from './components/StyledButton';
import StyledList from './components/StyledList';

const BUTTON_CLS_NAME = 'text-white bg-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700';
function App() {
  /**
  * TASK2
  * state 변수를 선언합니다.
  */
  /* Your code here */
  const [count, setCount] = useState<number>(0);
  const [records, setRecords] = useState<number[]>([]);
  const addRecord = () => {
    records.push(count);
    setRecords([...records]);
  };

  return (
    <main className="flex flex-col items-center py-4">
      {/**
        * TASK3
        * StyledButton 컴포넌트를 사용하여 버튼을 생성합니다.
        * 카운터의 값을 1 증가시키는 이벤트 핸들러를 등록합니다.
        * id 속성은 "increment"로 설정합니다.
       */}
      {
        /* Your code here */
        <StyledButton className={BUTTON_CLS_NAME} id={'increment'} onClick={() => {setCount(count + 1);}} >
          <span>+1</span>
        </StyledButton>
      }
      <div className="flex h-20 w-48 items-center justify-center text-2xl">
        Count:
        <div id="count-display" className="ml-4 flex size-10 items-center justify-center rounded-full bg-yellow-400 text-white">
          {/**
           * TASK3
           * 카운터의 값을 출력합니다.
           * 카운터의 값이 변경될 때마다 화면에 반영되어야 합니다.
           */}
          {
            /* Your code here */
            <span>{ count }</span>
          }
        </div>
      </div>
      {/**
        * TASK3
        * StyledButton 컴포넌트를 사용하여 버튼을 생성합니다.
        * 카운터의 값을 1 감소시키는 이벤트 핸들러를 등록합니다.
        * id 속성은 "decrement"로 설정합니다.
       */}
      {
        /* Your code here */
        <StyledButton className={BUTTON_CLS_NAME} id={'decrement'} onClick={() => {setCount(count - 1);}} >
          <span>-1</span>
        </StyledButton>
      }

      <br />
      {/**
        * TASK3
        * StyledButton 컴포넌트를 사용하여 버튼을 생성합니다.
        * 카운터의 값을 기록에 추가하는 이벤트 핸들러를 등록합니다.
        * id 속성은 "add-record"로 설정합니다.
       */}
      {
        /* Your code here */
        <StyledButton className={BUTTON_CLS_NAME} id={'add-record'} onClick={addRecord} >
          <span>기록 추가</span>
        </StyledButton>
      }
      {/**
       * TASK3
       * StyledList 컴포넌트를 사용하여 기록을 출력합니다.
       * 기록이 추가될 때마다 화면에 반영되어야 합니다.
       */}
      {
        /* Your code here */
        <StyledList records={records} id={'record-list'} />
      }
    </main>
  );
}

export default App;
