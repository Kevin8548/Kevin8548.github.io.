import {Button} from '@/components/Button';
import { ArrowRight } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
            <img src="/public/hero-bg.png" alt="Hero img" className="w-full h-full opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/20 to-background"/>
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) =>(
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                            Software engineer React Specialist
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            experiences with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe vero explicabo, reprehenderit ipsum beatae esse illum amet culpa cupiditate consectetur, tempora facere ipsa. Placeat, tenetur! Est quidem quis vero?
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me :3 <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton />
                    </div>

                </div>
                {/* Right Column - Text content */}
            </div>
        </div>
    </section>
);
};