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
      <nav className="border-b-2 border-primary bg-gradient-to-r from-blue-500 to-blue-400 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white border-2 border-gray-400 flex items-center justify-center rounded">
              <span className="text-2xl">⛏️</span>
            </div>
            <span className="text-xl font-bold text-white drop-shadow-md">RML</span>
            <span className="text-sm text-blue-100 ml-2">Ryt Minecraft Launcher</span>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-white hover:text-blue-100 transition-colors font-semibold">Главная</a>
            <a href="#download" className="text-white hover:text-blue-100 transition-colors font-semibold">Скачать</a>
            <a href="#info" className="text-white hover:text-blue-100 transition-colors font-semibold">Информация</a>
            <a href="#contact" className="text-white hover:text-blue-100 transition-colors font-semibold">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-400 border-2 border-green-600 rounded shadow-sm">
                <span className="text-green-900 font-bold">Beta Version 1.0</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                Твой мир.<br />
                <span className="text-blue-600">Твои правила.</span>
              </h1>
              <p className="text-xl text-gray-700">
                Лаунчер нового поколения с расширенными возможностями кастомизации и модификаций
              </p>
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="xp-button bg-gradient-to-b from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600 font-bold px-8"
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать
                </Button>
                <Button 
                  size="lg" 
                  className="xp-button bg-gradient-to-b from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 font-bold px-8"
                  onClick={() => document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="xp-window aspect-square bg-white relative overflow-hidden">
                <div className="xp-title-bar flex items-center gap-2">
                  <span className="text-sm">RML Launcher v1.0.0</span>
                </div>
                <div className="p-8 flex items-center justify-center h-full">
                  <div className="text-9xl opacity-40">🎮</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Скачать лаунчер</h2>
            <p className="text-gray-700">Внимательно прочитайте предупреждение перед загрузкой</p>
          </div>

          <div className="mb-8 xp-alert p-6">
            <div className="flex items-start gap-4">
              <div className="text-5xl">⚠️</div>
              <div className="space-y-2">
                <div className="font-bold text-lg text-red-700">ПРЕДУПРЕЖДЕНИЕ О БЕЗОПАСНОСТИ</div>
                <p className="font-semibold text-red-600">
                  Данный лаунчер содержит потенциально вредоносное программное обеспечение!
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-600">
                  <li>Может содержать вирусы, трояны и другое вредоносное ПО</li>
                  <li>Может получать доступ к вашим личным данным</li>
                  <li>Может нанести вред вашей системе</li>
                  <li>Разработчики не несут ответственности за последствия использования</li>
                </ul>
                <p className="font-bold text-base mt-4 text-red-700">
                  Используйте на свой страх и риск!
                </p>
              </div>
            </div>
          </div>

          <div className="xp-window bg-white">
            <div className="xp-title-bar">
              <div className="flex items-center gap-2">
                <Icon name="Download" size={16} />
                <span>Загрузка RML v1.0.0</span>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded">
                <Checkbox 
                  id="agree" 
                  checked={agreedToWarning}
                  onCheckedChange={(checked) => setAgreedToWarning(checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-sm leading-relaxed cursor-pointer text-gray-800">
                  Я понимаю, что данный лаунчер содержит вредоносное ПО и может нанести вред моей системе. 
                  Я принимаю все риски и освобождаю разработчиков от любой ответственности. 
                  Я скачиваю и использую это ПО на свой страх и риск.
                </label>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="xp-window p-4 text-center bg-gradient-to-b from-white to-blue-50">
                  <div className="xp-title-bar text-xs mb-3">Windows</div>
                  <Icon name="Monitor" className="mx-auto mb-2 text-blue-600" size={32} />
                  <div className="text-xs text-gray-600">7/8/10/11</div>
                </div>
                <div className="xp-window p-4 text-center bg-gradient-to-b from-white to-blue-50">
                  <div className="xp-title-bar text-xs mb-3">macOS</div>
                  <Icon name="Laptop" className="mx-auto mb-2 text-blue-600" size={32} />
                  <div className="text-xs text-gray-600">10.15+</div>
                </div>
                <div className="xp-window p-4 text-center bg-gradient-to-b from-white to-blue-50">
                  <div className="xp-title-bar text-xs mb-3">Linux</div>
                  <Icon name="Terminal" className="mx-auto mb-2 text-blue-600" size={32} />
                  <div className="text-xs text-gray-600">Ubuntu/Debian</div>
                </div>
              </div>

              <Button 
                className="w-full xp-button text-lg py-6 bg-gradient-to-b from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed" 
                size="lg"
                disabled={!agreedToWarning}
                onClick={handleDownload}
              >
                <Icon name="Download" className="mr-2" size={24} />
                Скачать RML v1.0.0
              </Button>

              {!agreedToWarning && (
                <p className="text-center text-sm text-gray-600 bg-yellow-100 border border-yellow-300 p-2 rounded">
                  Согласитесь с условиями, чтобы начать загрузку
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Содержимое лаунчера</h2>
            <p className="text-gray-700">Что включено в данную версию</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="xp-window bg-white hover:shadow-xl transition-shadow">
              <div className="xp-title-bar text-xs">Модифицированный клиент</div>
              <div className="p-6">
                <Icon name="Package" className="text-orange-500 mb-4" size={40} />
                <p className="text-sm text-gray-700">
                  Кастомная версия Minecraft с предустановленными модами и читами
                </p>
              </div>
            </div>

            <div className="xp-window bg-white hover:shadow-xl transition-shadow">
              <div className="xp-title-bar text-xs">Расширенные возможности</div>
              <div className="p-6">
                <Icon name="Zap" className="text-orange-500 mb-4" size={40} />
                <p className="text-sm text-gray-700">
                  X-Ray, Fly, Speed и другие читы для игры
                </p>
              </div>
            </div>

            <div className="xp-window bg-white hover:shadow-xl transition-shadow">
              <div className="xp-title-bar text-xs">Обход защиты</div>
              <div className="p-6">
                <Icon name="Shield" className="text-red-600 mb-4" size={40} />
                <p className="text-sm text-gray-700">
                  Инструменты для обхода античитов серверов
                </p>
              </div>
            </div>

            <div className="xp-window bg-white hover:shadow-xl transition-shadow">
              <div className="xp-title-bar text-xs">Сбор данных</div>
              <div className="p-6">
                <Icon name="Database" className="text-orange-500 mb-4" size={40} />
                <p className="text-sm text-gray-700">
                  ⚠️ Лаунчер собирает данные о вашей системе и активности
                </p>
              </div>
            </div>

            <div className="xp-window bg-white hover:shadow-xl transition-shadow">
              <div className="xp-title-bar text-xs">Сетевое подключение</div>
              <div className="p-6">
                <Icon name="Wifi" className="text-orange-500 mb-4" size={40} />
                <p className="text-sm text-gray-700">
                  Постоянное соединение с серверами лаунчера
                </p>
              </div>
            </div>

            <div className="xp-window bg-white hover:shadow-xl transition-shadow">
              <div className="xp-title-bar text-xs">Риски безопасности</div>
              <div className="p-6">
                <Icon name="AlertTriangle" className="text-red-600 mb-4" size={40} />
                <p className="text-sm text-gray-700">
                  ⚠️ Может содержать вредоносный код и угрозы для системы
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 xp-window bg-gradient-to-b from-yellow-50 to-yellow-100">
            <div className="xp-title-bar text-xs flex items-center gap-2">
              <Icon name="Info" size={14} />
              <span>Информация</span>
            </div>
            <div className="p-6">
              <p className="text-gray-800">
                Все функции, связанные с модификацией игры и обходом защиты, нарушают условия использования Minecraft. 
                Использование данного ПО может привести к блокировке вашего аккаунта.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Контакты и поддержка</h2>
            <p className="text-gray-700">Свяжитесь с нами, если возникли вопросы</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="xp-window bg-white">
              <div className="xp-title-bar text-xs flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <span>Email</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2">Отправьте нам письмо</p>
                <a href="mailto:support@ryt-launcher.com" className="text-blue-600 hover:underline font-semibold">
                  support@ryt-launcher.com
                </a>
              </div>
            </div>

            <div className="xp-window bg-white">
              <div className="xp-title-bar text-xs flex items-center gap-2">
                <Icon name="MessageCircle" size={14} />
                <span>Discord</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2">Присоединяйтесь к сообществу</p>
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  discord.gg/ryt-launcher
                </a>
              </div>
            </div>

            <div className="xp-window bg-white">
              <div className="xp-title-bar text-xs flex items-center gap-2">
                <Icon name="FileText" size={14} />
                <span>Документация</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2">Руководство по установке</p>
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  Открыть документацию
                </a>
              </div>
            </div>

            <div className="xp-window bg-white">
              <div className="xp-title-bar text-xs flex items-center gap-2">
                <Icon name="HelpCircle" size={14} />
                <span>FAQ</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2">Часто задаваемые вопросы</p>
                <a href="#" className="text-blue-600 hover:underline font-semibold">
                  Посмотреть FAQ
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 xp-alert">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <div className="font-bold text-lg text-red-700 mb-2">Правовая информация</div>
                <p className="text-red-600">
                  Разработчики не несут ответственности за любой ущерб, причиненный использованием данного программного обеспечения. 
                  Используя этот лаунчер, вы принимаете все риски на себя.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-blue-300 bg-gradient-to-r from-blue-500 to-blue-400 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white border-2 border-gray-400 flex items-center justify-center rounded">
                <span className="text-xl">⛏️</span>
              </div>
              <span className="font-bold text-white drop-shadow-md">RML</span>
            </div>
            <p className="text-sm text-white">
              © 2024 RML - Ryt Minecraft Launcher. Используйте на свой риск.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;