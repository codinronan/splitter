import React from 'react';
import styled from 'styled-components';
import { SplitDirection } from './index';

const Container = styled.div<{ dir?: SplitDirection }>`
  padding: ${props => props.dir === SplitDirection.Horizontal ? '0 2px' : '2px 0'};
  ${props => props.dir === SplitDirection.Horizontal ? 'height: 100%' : 'width: 100%'};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.dir === SplitDirection.Horizontal ? 'column' : 'row'};

  background: #020203;

  :hover {
    cursor: ${props => props.dir === SplitDirection.Horizontal ? 'col-resize' : 'row-resize'};

    // Set the Dragger background.
    & > * {
      background: #9995A3;
    }
  }
`;

const Dragger = styled.div<{ dir?: SplitDirection }>`
  width: ${props => props.dir === SplitDirection.Horizontal ? '4' : '24'}px;
  height: ${props => props.dir === SplitDirection.Horizontal ? '24' : '4'}px;
  background: #434252;
  border-radius: 2px;
`;

interface GutterProps {
  className?: string;
  draggerClassName?: string;
  direction?: SplitDirection;
  onMouseDown?: (e: any) => void;
}

const Gutter = React.forwardRef<HTMLDivElement, GutterProps>((
  {
    className,
    draggerClassName,
    direction,
    onMouseDown,
  },
  ref,
) => {
  return (
    <>
      {className &&
        <div
          className={className}
          ref={ref}
          dir={direction}
          onMouseDown={onMouseDown}
        >
          {draggerClassName &&
            <div
              className={draggerClassName}
              dir={direction}
            />
          }
          {!draggerClassName &&
            <Dragger
              dir={direction}
            />
          }
        </div>
      }

      {!className &&
        <Container
          ref={ref}
          className={className}
          dir={direction}
          onMouseDown={onMouseDown}
        >
          {draggerClassName &&
            <div
              className={draggerClassName}
              dir={direction}
            />
          }
          {!draggerClassName &&
            <Dragger
              dir={direction}
            />
          }
        </Container>
      }
    </>
  );
});

export default Gutter;

