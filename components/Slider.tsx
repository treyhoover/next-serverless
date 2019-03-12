import React from 'react';
import useComponentSize from '@rehooks/component-size';
import debounce from 'lodash.debounce';

type CalculateSlideWidth<Slide> = <Slide>(
  sliderWidth: number,
  item: Slide,
  index: number
) => number;

type Props<Slide> = React.HTMLAttributes<HTMLDivElement> & {
  items: Slide[];
  calculateSlideWidth: CalculateSlideWidth<Slide>;
  children: (item: Slide, index: number, width: number) => any;
  scrollTimeout?: number;
  onScrollStop?: () => void;
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
  scrollTimeout,
  onScrollStop,
  ...props
}: Props<Slide>) {
  const ref: React.MutableRefObject<HTMLDivElement> | null = React.useRef(null);
  const { width: sliderWidth } = useComponentSize(ref);

  React.useEffect(() => {
    if (ref.current == null) return;

    const onScroll = debounce(() => {
      if (typeof onScrollStop === 'function') {
        onScrollStop();
      }
    }, scrollTimeout);

    ref.current.addEventListener('scroll', onScroll);

    return () => {
      ref.current.removeEventListener('scroll', onScroll);
    };
  }, [scrollTimeout, ref.current]);

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
  scrollTimeout: 150,
};

export default Slider;
