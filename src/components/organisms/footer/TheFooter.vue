<template>
    <footer
        class="w-[100%] flex justify-center bg-white shadow"
        role="contentinfo"
    >
        <div class="max-w-[1216px] w-[100%] flex flex-col lg:flex-row py-8 px-4 xl:px-0 gap-6">
            <section
                class="flex flex-col gap-3"
                aria-labelledby="police-heading"
            >
                <h2
                    id="police-heading"
                    class="text-[1rem]"
                >
                    Polícia Civil MT
                </h2>

                <div class="space-y-4">
                    <p class="text-[1rem] md:text-[0.88rem]">
                        Sistema oficial de consulta de pessoas desaparecidas do Estado de Mato
                        Grosso.
                    </p>

                    <p class="text-[0.88rem] md:text-[0.75rem]">© 2023 Governo de Mato Grosso</p>
                </div>
            </section>

            <section
                class="flex flex-col gap-3"
                aria-labelledby="contacts-heading"
            >
                <h2
                    id="contacts-heading"
                    class="text-[1rem]"
                >
                    Contatos de Emergência
                </h2>

                <ul class="space-y-2">
                    <li class="flex items-center gap-2">
                        <phone
                            :color="'#245598'"
                            size="15"
                            aria-hidden="true"
                        />

                        <span class="text-[1rem] md:text-[0.88rem]">
                            Emergência:
                            <strong>190</strong>
                        </span>
                    </li>

                    <li class="flex items-center gap-2">
                        <siren
                            :color="'#245598'"
                            size="15"
                            aria-hidden="true"
                        />

                        <span class="text-[1rem] md:text-[0.88rem]">
                            Polícia Civil:
                            <strong>(65) 3648-1234</strong>
                        </span>
                    </li>

                    <li class="flex items-center gap-2">
                        <mail
                            :color="'#245598'"
                            size="15"
                            aria-hidden="true"
                        />
                        <a
                            href="mailto:desaparecidos@pc.mt.gov.br"
                            class="text-[1rem] md:text-[0.88rem]"
                            aria-label="Enviar email para desaparecidos@pc.mt.gov.br"
                        >
                            desaparecidos@pc.mt.gov.br
                        </a>
                    </li>
                </ul>
            </section>

            <section
                class="flex flex-col gap-3 lg:ml-[3rem]"
                aria-labelledby="info-heading"
            >
                <h2
                    id="info-heading"
                    class="text-[1rem]"
                >
                    Informações Úteis
                </h2>

                <ul class="space-y-2">
                    <li>
                        <a
                            href="#"
                            class="text-[1rem] md:text-[0.88rem]"
                        >
                            Como fazer um boletim de ocorrência
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-[1rem] md:text-[0.88rem]"
                        >
                            Dicas de prevenção
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-[1rem] md:text-[0.88rem]"
                        >
                            Perguntas frequentes
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-[1rem] md:text-[0.88rem]"
                        >
                            Política de privacidade
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </footer>
</template>

<script setup>
import { Mail, Phone, Siren } from 'lucide-vue-next'

defineOptions({
    name: 'TheFooter',
})
</script>
