import React, { useState, useRef } from 'react';

interface Person {
  firstName: string;
  lastName: string
}

// `?` === optional operator
interface Props {
  text: string;
  ok?: boolean;
  int?: number;
  fn?: (bob: string) => string;
  obj?: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

interface TextNode {
  text: string
}

// .FC = functional component
const TextField: React.FC<Props> = ({ handleChange }) => {
  const [text, setText] = useState<TextNode>({text: 'hello'});
  const inputRef = useRef<HTMLInputElement>(null);

  // setText({text})

  return (
    <div>
      <input ref={inputRef} />
      {/* onChange={} */}
    </div>
  )
}

export default TextField
