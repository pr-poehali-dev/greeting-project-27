import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [agreedToWarning, setAgreedToWarning] = useState(false);

  const handleDownload = () => {
    if (agreedToWarning) {
      alert('Загрузка начнется через несколько секунд...');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary pixel-corners flex items-center justify-center">
              <span className="text-2xl">⛏️</span>
            </div>
            <span className="text-xl font-bold text-foreground">RML</span>
            <span className="text-sm text-muted-foreground ml-2">Ryt Minecraft Launcher</span>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Скачать</a>
            <a href="#info" className="text-muted-foreground hover:text-foreground transition-colors">Информация</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/20 pixel-corners">
                <span className="text-accent font-semibold">Beta Version 1.0</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Твой мир.<br />
                <span className="text-primary">Твои правила.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Лаунчер нового поколения с расширенными возможностями кастомизации и модификаций
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="pixel-corners bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="pixel-corners"
                  onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 pixel-corners relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                  🎮
                </div>
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 pixel-corners">
                  <span className="text-sm font-semibold text-primary">v1.0.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Скачать лаунчер</h2>
            <p className="text-muted-foreground">Внимательно прочитайте предупреждение перед загрузкой</p>
          </div>

          <Alert className="mb-8 bg-destructive/10 border-destructive pixel-corners">
            <Icon name="AlertTriangle" className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-destructive font-bold text-lg">⚠️ ПРЕДУПРЕЖДЕНИЕ О БЕЗОПАСНОСТИ</AlertTitle>
            <AlertDescription className="text-destructive/90 space-y-2 mt-2">
              <p className="font-semibold">
                Данный лаунчер содержит потенциально вредоносное программное обеспечение!
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Может содержать вирусы, трояны и другое вредоносное ПО</li>
                <li>Может получать доступ к вашим личным данным</li>
                <li>Может нанести вред вашей системе</li>
                <li>Разработчики не несут ответственности за последствия использования</li>
              </ul>
              <p className="font-semibold text-base mt-4">
                Используйте на свой страх и риск!
              </p>
            </AlertDescription>
          </Alert>

          <Card className="p-8 pixel-corners bg-card">
            <div className="space-y-6">
              <div className="flex items-start gap-3 p-4 bg-muted/50 pixel-corners">
                <Checkbox 
                  id="agree" 
                  checked={agreedToWarning}
                  onCheckedChange={(checked) => setAgreedToWarning(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm leading-relaxed cursor-pointer">
                  Я понимаю, что данный лаунчер содержит вредоносное ПО и может нанести вред моей системе. 
                  Я принимаю все риски и освобождаю разработчиков от любой ответственности. 
                  Я скачиваю и использую это ПО на свой страх и риск.
                </label>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="p-4 text-center pixel-corners bg-muted/30">
                  <Icon name="Monitor" className="mx-auto mb-2 text-primary" size={32} />
                  <div className="font-semibold">Windows</div>
                  <div className="text-xs text-muted-foreground">7/8/10/11</div>
                </Card>
                <Card className="p-4 text-center pixel-corners bg-muted/30">
                  <Icon name="Laptop" className="mx-auto mb-2 text-primary" size={32} />
                  <div className="font-semibold">macOS</div>
                  <div className="text-xs text-muted-foreground">10.15+</div>
                </Card>
                <Card className="p-4 text-center pixel-corners bg-muted/30">
                  <Icon name="Terminal" className="mx-auto mb-2 text-primary" size={32} />
                  <div className="font-semibold">Linux</div>
                  <div className="text-xs text-muted-foreground">Ubuntu/Debian</div>
                </Card>
              </div>

              <Button 
                className="w-full pixel-corners text-lg py-6" 
                size="lg"
                disabled={!agreedToWarning}
                onClick={handleDownload}
              >
                <Icon name="Download" className="mr-2" size={24} />
                Скачать RML v1.0.0
              </Button>

              {!agreedToWarning && (
                <p className="text-center text-sm text-muted-foreground">
                  Согласитесь с условиями, чтобы начать загрузку
                </p>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section id="info" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Содержимое лаунчера</h2>
            <p className="text-muted-foreground">Что включено в данную версию</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 pixel-corners bg-card hover:bg-card/80 transition-colors">
              <Icon name="Package" className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Модифицированный клиент</h3>
              <p className="text-sm text-muted-foreground">
                Кастомная версия Minecraft с предустановленными модами и читами
              </p>
            </Card>

            <Card className="p-6 pixel-corners bg-card hover:bg-card/80 transition-colors">
              <Icon name="Zap" className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Расширенные возможности</h3>
              <p className="text-sm text-muted-foreground">
                X-Ray, Fly, Speed и другие читы для игры
              </p>
            </Card>

            <Card className="p-6 pixel-corners bg-card hover:bg-card/80 transition-colors">
              <Icon name="Shield" className="text-destructive mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Обход защиты</h3>
              <p className="text-sm text-muted-foreground">
                Инструменты для обхода античитов серверов
              </p>
            </Card>

            <Card className="p-6 pixel-corners bg-card hover:bg-card/80 transition-colors">
              <Icon name="Database" className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Сбор данных</h3>
              <p className="text-sm text-muted-foreground">
                ⚠️ Лаунчер собирает данные о вашей системе и активности
              </p>
            </Card>

            <Card className="p-6 pixel-corners bg-card hover:bg-card/80 transition-colors">
              <Icon name="Wifi" className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Сетевое подключение</h3>
              <p className="text-sm text-muted-foreground">
                Постоянное соединение с серверами лаунчера
              </p>
            </Card>

            <Card className="p-6 pixel-corners bg-card hover:bg-card/80 transition-colors">
              <Icon name="AlertTriangle" className="text-destructive mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Риски безопасности</h3>
              <p className="text-sm text-muted-foreground">
                ⚠️ Может содержать вредоносный код и угрозы для системы
              </p>
            </Card>
          </div>

          <Alert className="mt-8 bg-accent/10 border-accent pixel-corners">
            <Icon name="Info" className="h-5 w-5 text-accent" />
            <AlertTitle className="text-accent font-bold">Информация</AlertTitle>
            <AlertDescription className="text-accent/90">
              Все функции, связанные с модификацией игры и обходом защиты, нарушают условия использования Minecraft. 
              Использование данного ПО может привести к блокировке вашего аккаунта.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты и поддержка</h2>
            <p className="text-muted-foreground">Свяжитесь с нами, если возникли вопросы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 pixel-corners bg-card">
              <Icon name="Mail" className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">Отправьте нам письмо</p>
              <a href="mailto:support@ryt-launcher.com" className="text-primary hover:underline">
                support@ryt-launcher.com
              </a>
            </Card>

            <Card className="p-6 pixel-corners bg-card">
              <Icon name="MessageCircle" className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Discord</h3>
              <p className="text-muted-foreground mb-2">Присоединяйтесь к сообществу</p>
              <a href="#" className="text-primary hover:underline">
                discord.gg/ryt-launcher
              </a>
            </Card>

            <Card className="p-6 pixel-corners bg-card">
              <Icon name="FileText" className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Документация</h3>
              <p className="text-muted-foreground mb-2">Руководство по установке</p>
              <a href="#" className="text-primary hover:underline">
                Открыть документацию
              </a>
            </Card>

            <Card className="p-6 pixel-corners bg-card">
              <Icon name="HelpCircle" className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">FAQ</h3>
              <p className="text-muted-foreground mb-2">Часто задаваемые вопросы</p>
              <a href="#" className="text-primary hover:underline">
                Посмотреть FAQ
              </a>
            </Card>
          </div>

          <Alert className="mt-8 bg-destructive/10 border-destructive pixel-corners">
            <Icon name="Shield" className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-destructive font-bold">Правовая информация</AlertTitle>
            <AlertDescription className="text-destructive/90">
              Разработчики не несут ответственности за любой ущерб, причиненный использованием данного программного обеспечения. 
              Используя этот лаунчер, вы принимаете все риски на себя.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary pixel-corners flex items-center justify-center">
                <span className="text-xl">⛏️</span>
              </div>
              <span className="font-bold">RML</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 RML - Ryt Minecraft Launcher. Используйте на свой риск.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;