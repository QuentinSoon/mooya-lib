import * as react from 'react';
import { HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, LiHTMLAttributes, ReactNode } from 'react';

type AvatarProps = {
    /**
     * The source of the image to display.
     */
    src?: string;
    /**
     * The size of the avatar.
     * @default 'md'
     */
    size?: AvatarSizeProps;
    /**
     * The rounded of the avatar.
     * @default 'full'
     */
    rounded?: AvatarRoundedProps;
    /**
     * The color of the avatar.
     * @default 'basic'
     */
    color?: AvatarColorProps;
};
declare const Avatar: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, keyof AvatarProps> & AvatarProps & react.RefAttributes<HTMLDivElement>>;

type AvatarSizeProps = 'sm' | 'md' | 'lg';
type AvatarRoundedProps = 'sm' | 'md' | 'lg' | 'full' | 'none';
type AvatarColorProps = 'basic' | 'berry' | 'paradiso' | 'foreground';

declare const Button: react.ForwardRefExoticComponent<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "rounded" | "color" | "children" | "loading" | "variant" | "fullWidth" | "startContent" | "endContent" | "contentFullWidth"> & {
    /**
     * The variant of the button.
     * @default 'solid'
     */
    variant?: ButtonVariantProps | undefined;
    /**
     * The size of the button.
     * @default 'md'
     */
    size?: ButtonSizeProps | undefined;
    /**
     * The rounded of the button.
     */
    rounded?: ButtonRoundedProps | undefined;
    /**
     * The color of the button.
     * @default 'basic'
     */
    color?: ButtonColorProps | undefined;
    /**
     * The button is loading.
     * @default false
     */
    loading?: boolean | undefined;
    /**
     * The button is full width.
     * @default false
     */
    fullWidth?: boolean | undefined;
    /**
     * The startContent of the button.
     * @default null
     */
    startContent?: React.ReactNode;
    /**
     * The endContent of the button.
     * @default null
     */
    endContent?: React.ReactNode;
    /**
     * The content is full width.
     * @default false
     */
    contentFullWidth?: boolean | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLButtonElement>>;

type ButtonVariantProps = 'solid' | 'outline' | 'ghost' | 'light' | 'flat' | 'faded';
type ButtonSizeProps = 'sm' | 'md' | 'lg';
type ButtonRoundedProps = 'sm' | 'md' | 'lg' | 'full' | 'none';
type ButtonColorProps = 'basic' | 'berry' | 'paradiso' | 'foreground';

declare const Card: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const CardContent: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

type CheckboxProps = {
    /**
     * The size of the button.
     * @default 'md'
     */
    size?: CheckboxSizeProps;
    /**
     * The rounded of the button.
     */
    rounded?: CheckboxRoundedProps;
    /**
     * The color of the button.
     * @default 'basic'
     */
    color?: CheckboxColorProps;
};
declare const Checkbox: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, keyof CheckboxProps> & CheckboxProps & react.RefAttributes<HTMLInputElement>>;

type CheckboxSizeProps = 'sm' | 'md' | 'lg';
type CheckboxRoundedProps = 'sm' | 'md' | 'lg' | 'full' | 'none';
type CheckboxColorProps = 'basic' | 'berry' | 'paradiso' | 'foreground';

declare const Popover: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "open" | "setOpen" | "backdrop" | "placement" | "onHover"> & {
    open?: boolean | undefined;
    setOpen?: ((newValue: boolean) => void) | undefined;
    backdrop?: BackdropProps | undefined;
    placement?: PopoverPlacementsProps | undefined;
    onHover?: boolean | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const PopoverTrigger: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const PopoverContent: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

type PopoverPlacementsProps = 'top' | 'right' | 'left' | 'bottom' | 'top-right' | 'top-left' | 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom' | 'bottom-right' | 'bottom-left';

declare const Overlay: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "open" | "setOpen" | "backdrop" | "placement"> & {
    open: boolean;
    setOpen: (open: boolean) => void;
    backdrop?: BackdropProps | undefined;
    placement?: PopoverPlacementsProps | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

type BackdropProps = 'transparent' | 'opaque' | 'blur';

declare const Dropdown: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "open" | "setOpen" | "backdrop" | "placement"> & {
    open?: boolean | undefined;
    setOpen?: ((newValue: boolean) => void) | undefined;
    backdrop?: BackdropProps | undefined;
    placement?: PopoverPlacementsProps | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const Menu: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLUListElement>, "size" | "color" | "children" | "variant"> & {
    /**
     * The variant of the menu.
     * @default solid
     */
    variant?: MenuVariantProps | undefined;
    /**
     * The size of the menu.
     * @default md
     */
    size?: MenuSizeProps | undefined;
    /**
     * The color of the menu.
     * @default basic
     */
    color?: MenuColorProps | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLUListElement>>;

type MenuItemProps = {
    variant?: MenuVariantProps;
    color?: MenuColorProps;
};
declare const MenuItem: react.ForwardRefExoticComponent<Omit<LiHTMLAttributes<HTMLLIElement>, keyof MenuItemProps> & MenuItemProps & react.RefAttributes<HTMLLIElement>>;

declare const MenuSeparator: react.ForwardRefExoticComponent<Omit<LiHTMLAttributes<HTMLLIElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLLIElement>>;

type MenuVariantProps = 'solid' | 'outline' | 'light' | 'flat' | 'faded';
type MenuSizeProps = 'sm' | 'md' | 'lg';
type MenuColorProps = 'basic' | 'berry' | 'paradiso' | 'foreground' | 'poppy';

declare const DropdownContent: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "size" | "color" | "children" | "variant"> & {
    /**
     * The variant of the menu.
     * @default solid
     */
    variant?: MenuVariantProps | undefined;
    /**
     * The size of the menu.
     * @default sm
     */
    size?: MenuSizeProps | undefined;
    /**
     * The color of the menu.
     * @default basic
     */
    color?: MenuColorProps | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const DropdownItem: react.ForwardRefExoticComponent<Omit<LiHTMLAttributes<HTMLLIElement>, keyof MenuItemProps> & MenuItemProps & react.RefAttributes<HTMLLIElement>>;

declare const DropdownSeparator: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const DropdownTrigger: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const Input: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "children" | "variant"> & {
    /**
     * The variant of the input.
     * @default 'default'
     */
    variant?: InputVariantProps | undefined;
    /**
     * The id of the input.
     * @default 'inputId'
     */
    id?: string | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLInputElement>>;

type InputVariantProps = 'default' | 'floating' | 'ifta';

declare const Kbd: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "keys"> & {
    /**
     * The key(s) to render in the Kbd component.
     */
    keys?: KbdKey | KbdKey[] | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

type KbdKey = 'command' | 'shift' | 'ctrl' | 'option' | 'enter' | 'delete' | 'escape' | 'tab' | 'capslock' | 'up' | 'right' | 'down' | 'left' | 'pageup' | 'pagedown' | 'home' | 'end' | 'help' | 'space';

declare const Modal: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children" | "open" | "setOpen" | "backdrop" | "placement"> & {
    open: boolean;
    setOpen: (newValue: boolean) => void;
    backdrop?: BackdropProps | undefined;
    placement?: PopoverPlacementsProps | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const Navbar: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const NavbarLeft: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const NavbarCenter: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

declare const NavbarRight: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLDivElement>>;

type UserSizeProps = 'sm' | 'md' | 'lg';

type UserProps = {
    avatarProps?: AvatarProps;
    name?: string;
    description?: string | ReactNode;
    size?: UserSizeProps;
};
declare const User: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, keyof UserProps> & UserProps & react.RefAttributes<HTMLDivElement>>;

export { Avatar, Button, Card, CardContent, Checkbox, Dropdown, DropdownContent, DropdownItem, DropdownSeparator, DropdownTrigger, Input, Kbd, Menu, MenuItem, MenuSeparator, Modal, Navbar, NavbarCenter, NavbarLeft, NavbarRight, Overlay, Popover, PopoverContent, PopoverTrigger, User };
