import React from "react";

/**
 * onChange?: (color: string) => void;
 *
 * color format: hex string like #000000
 */
export const ColorSelect = ({ onChange }: { onChange?: (color: string) => void }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <form>
      <label htmlFor="color-select">Color Select:</label>
      <input type="color" name="color" id="color-select" className="ml-4 border rounded-md" onChange={handleChange} />
    </form>
  );
};
