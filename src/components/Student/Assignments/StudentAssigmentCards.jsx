import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const stats = [
  {
    label: "Total Assignments",
    value: 5,
    icon: <MdOutlineAssignment size={22} />,
    color: "text-gray-700",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-500",
    border: "border-l-gray-400",
  },
  {
    label: "Pending",
    value: 2,
    icon: <BsHourglassSplit size={19} />,
    color: "text-orange-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-400",
    border: "border-l-orange-400",
  },
  {
    label: "Submitted",
    value: 1,
    icon: <IoCheckmarkDoneCircleOutline size={22} />,
    color: "text-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
    border: "border-l-blue-400",
  },
  {
    label: "Reviewed",
    value: 2,
    icon: <HiOutlineBadgeCheck size={22} />,
    color: "text-green-500",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
    border: "border-l-green-500",
  },
];

const StudentAssignmentCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-white rounded-2xl border border-gray-100 border-l-4 ${stat.border} shadow-sm px-5 py-5 flex items-center gap-4`}
        >
          {/* Icon */}
          <div
            className={`${stat.iconBg} ${stat.iconColor} p-3 rounded-xl flex-shrink-0`}
          >
            {stat.icon}
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            <p className={`text-3xl font-bold mt-0.5 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentAssignmentCards;