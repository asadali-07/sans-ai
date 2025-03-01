"use client"
import { useCountUp } from 'react-countup';

const StatSection = () => {
    const { countUp: countUp1, start: start1 } = useCountUp({
        ref: 'counter1', // ID or ref for the first counter
        end: 50,
        duration: 1,
        enableScrollSpy: true,
        scrollSpyDelay: 100, // Delay after entering the viewport
        suffix: '+', // Suffix
      });
    
      const { countUp: countUp2, start: start2 } = useCountUp({
        ref: 'counter2',
        end: 1000,
        duration: 2,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
        suffix: '+',
      });
    
      const { countUp: countUp3, start: start3 } = useCountUp({
        ref: 'counter3',
        end: 95,
        duration: 1,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
        suffix: '%',
      });

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3
            className="text-4xl font-bold"
            id="counter1"
            ref={start1}
          >
            {countUp1}
          </h3>
          <p className="text-muted-foreground">Industries Covered</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <h3
            className="text-4xl font-bold"
            id="counter2"
            ref={start2}
          >
            {countUp2}
          </h3>
          <p className="text-muted-foreground">Interview Questions</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <h3
            className="text-4xl font-bold"
            id="counter3"
            ref={start3}
          >
            {countUp3}
          </h3>
          <p className="text-muted-foreground">Success Rate</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <h3 className="text-4xl font-bold">24/7</h3>
          <p className="text-muted-foreground">AI Support</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default StatSection