import React from "react";


export default function CVBuilder() {

    /*return (

        <div className="content-component p-6">
                  
            <div className="mb-12">
        
                <h1 className="text-4xl font-bold text-slate-900 mb-3">Interview Calendar</h1>
                <p className="text-lg text-slate-600">Track all your scheduled interviews, get reminders, and stay prepared for every opportunity.</p>
                    
            </div>

            <div>

            </div>
                         
        </div>

    )*/


    const interviews = [
        { date: 20, title: "TechCorp Interview", color: "bg-blue-500" },
        { date: 22, title: "StartupHub Interview", color: "bg-purple-500" },
        { date: 25, title: "CloudScale Interview", color: "bg-green-500" }
    ];

    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="p-6">

            <h1 className="text-4xl font-bold mb-2 text-slate-900">
                Interview Calendar
            </h1>

            <p className="text-slate-600 mb-8">
                Your scheduled interviews in a visual calendar view
            </p>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-3">

                {days.map((day) => {

                    const event = interviews.find(i => i.date === day);

                    return (
                        <div
                            key={day}
                            className="h-24 border rounded-lg p-2 bg-white shadow-sm relative"
                        >

                            <span className="text-sm text-slate-500">{day}</span>

                            {event && (
                                <div className={`mt-2 text-xs text-white p-1 rounded ${event.color}`}>
                                    {event.title}
                                </div>
                            )}

                        </div>
                    );
                })}

            </div>

        </div>
    ); 

}


