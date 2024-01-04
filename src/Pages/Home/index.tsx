import { useState } from "react";

import { Button } from "../../Components/Button";

export const HomePage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1 className="text-5xl">{count}</h1>
      <Button
        class="bg-[#fe6e6f] text-[whitesmoke] p-4 rounded-lg"
        set={setCount}
        count={count}
      />
    </>
  );
};
