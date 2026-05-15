import React from "react";

type CardProps = {
    children: React.ReactNode;
}

export default function Card({ children }: CardProps) {

    return (        
        <div className="card bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 overflow-hidden group">
            {children}
        </div>
    )
}