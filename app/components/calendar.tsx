'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

export default function Calendar({ onDateSelect, selectedDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const monthName = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    onDateSelect?.(newDate);
  };

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = Array.from({ length: firstDayOfMonth }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const colorClasses = {
    header: 'bg-gradient-to-r from-blue-600 to-purple-600',
    today: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold',
    selected: 'bg-gradient-to-br from-pink-500 to-rose-500 text-white',
    hover: 'hover:bg-blue-100 hover:scale-105',
    weekend: 'text-purple-600 font-semibold',
    weekday: 'text-slate-700',
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl overflow-hidden">
      {/* Header */}
      <div className={`${colorClasses.header} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-2xl font-bold text-center flex-1">{monthName}</h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Day Labels */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {dayLabels.map((day) => (
            <div
              key={day}
              className={`text-center font-semibold py-2 text-sm ${
                day === 'Sun' || day === 'Sat'
                  ? colorClasses.weekend
                  : colorClasses.weekday
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && handleDateClick(day)}
              disabled={!day}
              className={`
                aspect-square rounded-lg text-sm font-medium transition-all
                ${!day && 'opacity-0'}
                ${day && !isToday(day) && !isSelected(day) && colorClasses.hover}
                ${isToday(day) && colorClasses.today}
                ${isSelected(day) && colorClasses.selected}
                ${day && !isToday(day) && !isSelected(day) && 'bg-slate-100 text-slate-700'}
                ${!day && 'cursor-default'}
                ${day && 'cursor-pointer'}
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 border-t border-slate-200">
        <p className="text-xs text-slate-600 text-center">
          {selectedDate
            ? `Selected: ${selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })}`
            : 'Select a date'}
        </p>
      </div>
    </div>
  );
}