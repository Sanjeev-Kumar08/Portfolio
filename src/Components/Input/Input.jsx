import React from "react";

function Input({ type, placeholder, label, id, name }) {
  return (
    <div className="w-full custom-meriva">
      <label htmlFor={id} className="block mb-1 ml-1 text-[#836FFF] text-[18px]">
        {label}
      </label>

      {id !== "message-field" ? (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required
          className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-[15px] focus:outline-none focus:border-[#836FFF] focus:shadow-[0_0_3px_#836FFF]"
        />
      ) : (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required
          className="w-full px-3 py-2 border-2 border-gray-500 rounded-lg text-[15px] h-[100px] focus:outline-none focus:border-[#836FFF] focus:shadow-[0_0_3px_#836FFF]"
        ></textarea>
      )}
    </div>
  );
}

export default Input;
