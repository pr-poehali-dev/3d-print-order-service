import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [material, setMaterial] = useState('pla');
  const [weight, setWeight] = useState(100);
  const [delivery, setDelivery] = useState('standard');

  const calculatePrice = () => {
    const materialPrices: Record<string, number> = {
      pla: 5,
      petg: 7,
      tpu: 12,
      sla: 15,
    };
    const deliveryPrices: Record<string, number> = {
      standard: 300,
      express: 600,
    };
    return (weight * materialPrices[material]) + deliveryPrices[delivery];
  };

  const models = [
    { id: 1, name: 'Держатель для телефона', material: 'PLA', price: 450, time: '4ч' },
    { id: 2, name: 'Декоративная ваза', material: 'PETG', price: 890, time: '8ч' },
    { id: 3, name: 'Шестеренка 40мм', material: 'PLA', price: 320, time: '3ч' },
    { id: 4, name: 'Корпус Raspberry Pi', material: 'PLA', price: 550, time: '5ч' },
    { id: 5, name: 'Кашпо для растений', material: 'PETG', price: 720, time: '6ч' },
    { id: 6, name: 'Брелок с логотипом', material: 'SLA', price: 280, time: '2ч' },
  ];

  const works = [
    { id: 1, title: 'Прототип корпуса', client: 'Студия Дизайна Х', image: 'https://cdn.poehali.dev/projects/6939b3c2-5bbc-4c7a-87bd-1bca131fd695/files/16286f36-517a-4ce7-b9c0-df59b232fbb0.jpg' },
    { id: 2, title: 'Инженерные детали', client: 'ТехЛаб', image: 'https://cdn.poehali.dev/projects/6939b3c2-5bbc-4c7a-87bd-1bca131fd695/files/38b6aef6-48e7-44a5-87d0-761e0d525676.jpg' },
    { id: 3, title: 'Архитектурный макет', client: 'Архитект Иванов', image: 'https://cdn.poehali.dev/projects/6939b3c2-5bbc-4c7a-87bd-1bca131fd695/files/04bcf6ab-5a3f-46b5-ab3a-84f1a1a7fe6b.jpg' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Box" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3D Print Hub
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#how" className="text-foreground/80 hover:text-foreground transition-colors">Как работает</a>
            <a href="#catalog" className="text-foreground/80 hover:text-foreground transition-colors">Каталог</a>
            <a href="#gallery" className="text-foreground/80 hover:text-foreground transition-colors">Работы</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
            <Button variant="outline" size="sm">Войти</Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 hover:bg-primary/30" variant="outline">
              <Icon name="Zap" size={14} className="mr-1" />
              Онлайн-мониторинг печати в реальном времени
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Загрузите STL →<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Мы напечатаем
              </span>
              <br />→ Доставка до двери
            </h1>
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Гарантированное качество, доставка 24–72 часа в регионе. Наблюдайте за печатью онлайн в режиме реального времени.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 rounded-2xl shadow-lg shadow-primary/50">
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить файл
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-2xl border-2">
                <Icon name="Package" size={20} className="mr-2" />
                Заказать печать
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-foreground/70">Три простых шага до готового изделия</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Upload',
                step: '01',
                title: 'Загрузите STL',
                description: 'Выберите готовую модель из каталога или загрузите свой файл. Автоматическая проверка файла на ошибки.',
                color: 'from-primary to-primary/50',
              },
              {
                icon: 'Calculator',
                step: '02',
                title: 'Расчёт цены',
                description: 'Выберите материал и постобработку. Мгновенный расчёт стоимости и времени печати. Безопасная оплата.',
                color: 'from-secondary to-secondary/50',
              },
              {
                icon: 'Video',
                step: '03',
                title: 'Онлайн-мониторинг',
                description: 'Наблюдайте за печатью в реальном времени через онлайн-трансляцию. Доставка курьером до двери за 24-72 часа.',
                color: 'from-accent to-accent/50',
              },
            ].map((step, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-20 rounded-full blur-2xl`} />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon name={step.icon as any} size={32} className="text-white" />
                    </div>
                    <span className="text-5xl font-heading font-bold text-foreground/10">{step.step}</span>
                  </div>
                  <CardTitle className="text-2xl font-heading">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/70">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-3xl font-heading flex items-center gap-2">
                <Icon name="Calculator" size={32} className="text-primary" />
                Калькулятор стоимости
              </CardTitle>
              <CardDescription className="text-base">
                Рассчитайте стоимость вашей 3D-печати прямо сейчас
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="material" className="text-base">Материал</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger id="material" className="h-12 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pla">PLA (5₽/г)</SelectItem>
                      <SelectItem value="petg">PETG (7₽/г)</SelectItem>
                      <SelectItem value="tpu">TPU (12₽/г)</SelectItem>
                      <SelectItem value="sla">SLA смола (15₽/г)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-base">Вес модели (г)</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="delivery" className="text-base">Доставка</Label>
                <Select value={delivery} onValueChange={setDelivery}>
                  <SelectTrigger id="delivery" className="h-12 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Стандартная 48-72ч (300₽)</SelectItem>
                    <SelectItem value="express">Экспресс 24ч (600₽)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg text-foreground/70">Итоговая стоимость:</span>
                  <span className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {calculatePrice()} ₽
                  </span>
                </div>
                <Button className="w-full h-14 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать печать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Популярные модели
            </h2>
            <p className="text-xl text-foreground/70">Готовые модели для быстрого заказа</p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 h-12 rounded-xl">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="pla">PLA</TabsTrigger>
              <TabsTrigger value="petg">PETG</TabsTrigger>
              <TabsTrigger value="sla">SLA</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
              {models.map((model) => (
                <Card key={model.id} className="group hover:scale-105 transition-all duration-300 border-2 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Box" size={64} className="text-foreground/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-heading">{model.name}</CardTitle>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {model.material}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-4 text-base">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {model.time}
                      </span>
                      <span className="text-2xl font-bold text-primary">{model.price} ₽</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full rounded-xl" variant="outline">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-foreground/70">Портфолио выполненных проектов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {works.map((work) => (
              <Card key={work.id} className="group overflow-hidden border-2 hover:border-primary transition-colors">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <Button variant="secondary" size="sm" className="rounded-xl">
                      <Icon name="Play" size={16} className="mr-2" />
                      Timelapse
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">{work.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="User" size={16} />
                    {work.client}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-xl px-8">
              <Icon name="Grid" size={20} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-card/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Материалы и услуги
            </h2>
            <p className="text-xl text-foreground/70">Широкий выбор материалов и постобработки</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2">
                  <Icon name="Layers" size={28} className="text-primary" />
                  Материалы печати
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'PLA', desc: 'Биоразлагаемый, подходит для декора и прототипов', price: '5₽/г' },
                  { name: 'PETG', desc: 'Прочный, устойчив к температуре и химии', price: '7₽/г' },
                  { name: 'TPU', desc: 'Гибкий, для резиновых деталей', price: '12₽/г' },
                  { name: 'SLA смола', desc: 'Высокая детализация для мелких деталей', price: '15₽/г' },
                ].map((mat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors">
                    <Badge className="mt-1 bg-gradient-to-r from-primary to-secondary text-white">{mat.price}</Badge>
                    <div>
                      <div className="font-semibold text-lg">{mat.name}</div>
                      <div className="text-sm text-foreground/70">{mat.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2">
                  <Icon name="Sparkles" size={28} className="text-secondary" />
                  Постобработка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Шлифовка', desc: 'Удаление слоев печати, гладкая поверхность', icon: 'CircleDot' },
                  { name: 'Покраска', desc: 'Профессиональная покраска в любой цвет', icon: 'Palette' },
                  { name: 'Сборка', desc: 'Сборка многокомпонентных изделий', icon: 'Wrench' },
                  { name: 'Постобработка SLA', desc: 'Промывка и отверждение смолы', icon: 'Droplet' },
                ].map((service, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon as any} size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{service.name}</div>
                      <div className="text-sm text-foreground/70">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-foreground/70">Ответы на популярные вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Какие форматы файлов вы принимаете?',
                a: 'Мы принимаем файлы в форматах STL, OBJ, 3MF. Перед печатью файл автоматически проверяется на наличие ошибок.',
              },
              {
                q: 'Сколько времени занимает печать?',
                a: 'Время печати зависит от размера и сложности модели. В среднем от 2 до 24 часов. Точное время рассчитывается автоматически при загрузке файла.',
              },
              {
                q: 'Как я могу следить за процессом печати?',
                a: 'После начала печати вы получите ссылку на онлайн-трансляцию с камеры принтера. Вы можете наблюдать за процессом в режиме реального времени.',
              },
              {
                q: 'Какие сроки доставки?',
                a: 'Стандартная доставка — 48-72 часа по региону, экспресс-доставка — 24 часа. Отправка осуществляется курьерской службой с трек-номером.',
              },
              {
                q: 'Можно ли заказать печать для коммерческих целей?',
                a: 'Да, мы работаем с B2B клиентами. Для коммерческих заказов предусмотрены специальные условия и приоритетная очередь печати. Свяжитесь с нами для обсуждения.',
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-2 rounded-xl px-6 bg-card/50">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="partnership" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-2 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-heading mb-2">
                Партнерство и коммерческие предложения
              </CardTitle>
              <CardDescription className="text-base">
                Специальные условия для дизайн-студий, FabLab и инженерных компаний
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: 'Zap', text: 'Приоритетная очередь' },
                  { icon: 'Percent', text: 'Специальные цены' },
                  { icon: 'Users', text: 'Персональный менеджер' },
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                    <Icon name={benefit.icon as any} size={24} className="text-primary" />
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input id="company" placeholder="Название компании" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="company@example.com" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Расскажите о вашем проекте" className="h-12 rounded-xl" />
                </div>
                <Button className="w-full h-14 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить запрос
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Box" size={24} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">3D Print Hub</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Профессиональная 3D-печать с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">3D-печать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Постобработка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Прототипирование</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнерство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@3dprinthub.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Россия
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
            <p>&copy; 2024 3D Print Hub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;