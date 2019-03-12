import React from 'react';
import useComponentSize from '@rehooks/component-size';

type CalculateSlideWidth<Slide> = <Slide>(
  sliderWidth: number,
  item: Slide,
  index: number
) => number;

type Props<Slide> = React.HTMLAttributes<HTMLDivElement> & {
  items: Slide[];
  calculateSlideWidth: CalculateSlideWidth<Slide>;
  children: (item: Slide, index: number, width: number) => any;
};

const calculateDefaultSlideWidth: CalculateSlideWidth<
  unknown
> = function calculateDefaultSlideWidth(sliderWidth, item, index) {
  const x = sliderWidth > 900 ? 3 : sliderWidth > 700 ? 2 : 1;

  return Math.round(sliderWidth / x);
};

function Slider<Slide>({
  children: render,
  items,
  calculateSlideWidth,
  ...props
}: Props<Slide>) {
  const ref = React.useRef(null);
  const { width: sliderWidth } = useComponentSize(ref);

  return (
    <div {...props} ref={ref}>
      {items.map((item, index) => {
        const slideWidth = calculateSlideWidth<Slide>(sliderWidth, item, index);

        return render(item, index, slideWidth);
      })}
    </div>
  );
}

Slider.defaultProps = {
  calculateSlideWidth: calculateDefaultSlideWidth,
};

export default Slider;
