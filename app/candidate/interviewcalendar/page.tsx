"use client";

import React from "react";

const InterviewCalendar = () => {
  // Mock interview data
  const upcomingInterviews = [
    {
      id: 1,
      company: "Company A",
      position: "Frontend Developer",
      date: "2026-06-15",
      time: "10:00 AM",
      interviewer: "John Smith",
      status: "scheduled",
      type: "Technical Round",
    },
    {
      id: 2,
      company: "Tech Solutions",
      position: "Backend Engineer",
      date: "2026-06-18",
      time: "2:30 PM",
      interviewer: "Sarah Johnson",
      status: "scheduled",
      type: "HR Round",
    },
    {
      id: 3,
      company: "Digital Innovators",
      position: "Full Stack Developer",
      date: "2026-06-20",
      time: "11:00 AM",
      interviewer: "Mike Chen",
      status: "confirmed",
      type: "Final Round",
    },
    {
      id: 4,
      company: "Company B",
      position: "QA Engineer",
      date: "2026-06-22",
      time: "3:00 PM",
      interviewer: "Emma Davis",
      status: "scheduled",
      type: "Technical Round",
    },
    {
      id: 5,
      company: "Innovation Labs",
      position: "UI/UX Designer",
      date: "2026-06-25",
      time: "9:00 AM",
      interviewer: "Lisa Wong",
      status: "confirmed",
      type: "Portfolio Review",
    },
  ];

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = React.useState<Date | null>(null);
  const [today, setToday] = React.useState<string>("");

  React.useEffect(() => {
    const now = new Date();
    setCurrentMonth(new Date(2026, 5)); // June 2026
    setToday(formatDateString(now));
    setIsLoaded(true);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-50 border-l-4 border-green-500 text-green-900";
      case "scheduled":
        return "bg-blue-50 border-l-4 border-blue-500 text-blue-900";
      case "completed":
        return "bg-gray-50 border-l-4 border-gray-500 text-gray-900";
      default:
        return "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-900";
    }
  };

  const getStatusBadge = (status: string) => {
    const badges: { [key: string]: string } = {
      confirmed: "bg-green-100 text-green-800",
      scheduled: "bg-blue-100 text-blue-800",
      completed: "bg-gray-100 text-gray-800",
    };
    return badges[status] || "bg-yellow-100 text-yellow-800";
  };

  const getTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      "Technical Round": "💻",
      "HR Round": "👥",
      "Final Round": "🎯",
      "Phone Screen": "📱",
      "Portfolio Review": "🎨",
    };
    return icons[type] || "📋";
  };

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Format date for comparison
  const formatDateString = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Get interviews for selected date
  const getInterviewsForDate = (dateStr: string) => {
    return upcomingInterviews.filter((interview) => interview.date === dateStr);
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const calendarDays = currentMonth ? generateCalendarDays() : [];
  const monthName = currentMonth
    ? currentMonth.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "";

  const handlePrevMonth = () => {
    if (currentMonth) {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    }
  };

  const handleNextMonth = () => {
    if (currentMonth) {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    }
  };

  const handleDateClick = (day: number) => {
    if (currentMonth) {
      const dateStr = formatDateString(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      );
      setSelectedDate(dateStr);
    }
  };

  const selectedInterviews = selectedDate ? getInterviewsForDate(selectedDate) : [];

  if (!isLoaded || !currentMonth) {
    return (
      <div className="content-component px-10">
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-3">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-component px-14 py-8">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">📅 Interview Calendar</h1>
            <p className="text-gray-600">Pick a date to view your scheduled interviews</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg">
            Schedule Interview
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Total Interviews</p>
            <p className="text-3xl font-bold text-gray-900">{upcomingInterviews.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Confirmed</p>
            <p className="text-3xl font-bold text-green-600">
              {upcomingInterviews.filter((i) => i.status === "confirmed").length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">Scheduled</p>
            <p className="text-3xl font-bold text-blue-600">
              {upcomingInterviews.filter((i) => i.status === "scheduled").length}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <p className="text-gray-600 text-sm font-semibold uppercase mb-2">This Week</p>
            <p className="text-3xl font-bold text-purple-600">2</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Calendar Section */}
        <div className="col-span-2">
          <div className="rounded-xl shadow-md bg-white border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{monthName}</h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
                >
                  ←
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
                >
                  →
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-gray-600 py-2 text-sm">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const dateStr = day
                  ? formatDateString(
                      new Date(currentMonth!.getFullYear(), currentMonth!.getMonth(), day)
                    )
                  : null;
                const interviewsForDay = dateStr ? getInterviewsForDate(dateStr) : [];
                const isSelected = selectedDate === dateStr;
                const isToday = dateStr === today;

                return (
                  <div key={index}>
                    {day ? (
                      <button
                        onClick={() => handleDateClick(day)}
                        className={`w-full p-3 rounded-lg border-2 transition-all duration-300 relative ${
                          isSelected
                            ? "bg-green-500 text-white border-green-500"
                            : isToday
                            ? "bg-blue-50 border-blue-400"
                            : interviewsForDay.length > 0
                            ? "bg-orange-50 border-orange-300 hover:border-orange-400"
                            : "bg-white border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="text-sm font-semibold">{day}</div>
                        {interviewsForDay.length > 0 && (
                          <div className={`text-xs mt-1 ${isSelected ? "text-white" : "text-orange-600"}`}>
                            {interviewsForDay.length} interview{interviewsForDay.length > 1 ? "s" : ""}
                          </div>
                        )}
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Date Interviews */}
        <div>
          <div className="rounded-xl shadow-md bg-white border border-gray-100 p-8 sticky top-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {selectedDate
                ? new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })
                : "Select a Date"}
            </h3>

            {selectedInterviews.length > 0 ? (
              <div className="space-y-3">
                {selectedInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className={`p-4 rounded-lg border-l-4 ${getStatusColor(interview.status)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-sm">{getTypeIcon(interview.type)} {interview.type}</p>
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getStatusBadge(interview.status)}`}>
                        {interview.status}
                      </span>
                    </div>
                    <p className="text-sm font-bold mb-2">{interview.company}</p>
                    <p className="text-xs mb-2">{interview.position}</p>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>⏰ {interview.time}</p>
                      <p>👤 {interview.interviewer}</p>
                    </div>
                    <button className="w-full mt-3 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold rounded hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm">
                  {selectedDate ? "No interviews scheduled for this date" : "Select a date to view interviews"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewCalendar;
