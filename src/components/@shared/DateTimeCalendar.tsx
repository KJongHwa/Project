'use client';

import { hyphenYearMonthDay } from '@/utils/dateUtils';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/dateTimeCalendar.css';
import ScrollTimePicker from './ScrollTimePicker';
import Button from './Button';

type CalendarValue = Date | null | [Date | null, Date | null];

interface DateTimeCalendarProps {
  isOpen: boolean;
  selectedDate: string;
  onClose(): void;
  onDateChange(date: string): void;
  layout?: string;
}

/**
 * 공통 DateTime Calendar 컴포넌트
 * @param isOpen 캘린더의 열린 상태 (true), 닫힌 상태 (false)를 가지는 boolean state
 * @param onClose 캘린더의 닫는 기능을 실행하는 함수
 * @param onDateChange 캘린더의 값을 교환하는 함수
 * @param layout 캘린더의 레이아웃을 수정하기 위한 tailwind css className
 */

export default function DateTimeCalendar({
  isOpen,
  selectedDate,
  onClose,
  onDateChange,
  layout,
}: DateTimeCalendarProps) {
  const [date, setDate] = useState<string>(selectedDate);
  const [selectedHour, setSelectedHour] = useState(9);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState('PM');

  const formatDate = `${date} ${selectedPeriod} ${selectedHour.toString().padStart(2, '0')}:${selectedMinute.toString().padStart(2, '0')}`;

  const handleDateChange = (newDate: CalendarValue) => {
    setDate(hyphenYearMonthDay(String(newDate)));
  };

  const handleReset = () => {
    setDate('');
    onDateChange('');
    onClose();
  };

  const handleSubmit = () => {
    onDateChange(formatDate);
    onClose();
  };

  // ESC 키 입력 시 캘린더 닫기 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`${isOpen ? '' : 'hidden'} ${layout} border-1 absolute z-100 flex flex-col rounded-[10px] border-default-tertiary bg-default-tertiary py-5 pl-6 pr-6 text-black shadow-xl md:pr-0`}
    >
      <div className="flex flex-col md:h-[332px] md:flex-row">
        <Calendar
          onChange={handleDateChange}
          value={date}
          calendarType="gregory"
          locale="en-us"
          next2Label={null}
          prev2Label={null}
          minDetail="year"
        />
        <ScrollTimePicker
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          selectedPeriod={selectedPeriod}
          onHourChange={setSelectedHour}
          onMinuteChange={setSelectedMinute}
          onPeriodChange={setSelectedPeriod}
        />
      </div>

      <div className="mx-auto flex w-[250px] items-center justify-between">
        <Button
          className="w-[122px]"
          variant="secondary"
          onClick={handleReset}
          disabled={date === ''}
        >
          초기화
        </Button>
        <Button
          className="w-[122px]"
          variant="primary"
          onClick={handleSubmit}
          disabled={date === ''}
        >
          적용
        </Button>
      </div>
    </div>
  );
}