import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Moderno",
    description:
      "Creando aplicaciones web modernas, escalables e interactivas con enfoque en rendimiento y diseño.",
  },
  {
    icon: Rocket,
    title: "Optimización",
    description:
      "Desarrollando experiencias rápidas y fluidas para computadoras, celulares y dispositivos inteligentes.",
  },
  {
    icon: Users,
    title: "Resolución de Problemas",
    description:
      "Transformando ideas complejas en soluciones funcionales, intuitivas y pensadas para usuarios reales.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Explorando tecnologías como IA, IoT, automatización y sistemas inteligentes para crear experiencias diferentes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre Mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo experiencias digitales,
              <span className="font-serif italic font-normal text-white">
                {" "}
                proyecto por proyecto.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy desarrollador de software apasionado por crear aplicaciones
                modernas, visualmente atractivas y funcionales. Disfruto
                transformar ideas en experiencias digitales que se sientan
                dinámicas, intuitivas y bien construidas.
              </p>

              <p>
                He trabajado en proyectos utilizando tecnologías como React,
                Vue, Flutter, Node.js y bases de datos relacionales, además de
                desarrollar sistemas conectados con hardware usando ESP32,
                Arduino y automatización inteligente.
              </p>

              <p>
                Me interesa combinar diseño, rendimiento y creatividad para
                construir soluciones que no solo funcionen bien, sino que también
                transmitan una experiencia diferente. Siempre estoy explorando
                nuevas tecnologías y buscando formas de mejorar cada proyecto.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "No solo desarrollo aplicaciones; creo experiencias digitales
                rápidas, modernas e interactivas que conectan tecnología,
                creatividad y funcionalidad."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};